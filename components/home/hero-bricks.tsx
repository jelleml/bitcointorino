'use client'

import { useEffect, useRef } from 'react'

// Mattone a vista piemontese (circa 25 × 5,5 cm), posato a correre: file sfalsate di mezzo mattone
const BRICK_W = 58         // larghezza mattone, px
const BRICK_H = 15         // altezza mattone, px
const JOINT = 5            // spessore del giunto di malta, px
const BASE_ALPHA = 0.11
const HOVER_RADIUS = 170   // raggio d'influenza del puntatore
const LIFT = 10            // spostamento massimo dei mattoni vicino al puntatore
const RIPPLE_SPEED = 520   // px/s dell'onda generata dal click
const RIPPLE_LIFE = 1.6    // s

type Ripple = { x: number; y: number; t0: number }

const roundedRect = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) => {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

/**
 * Muro di mattoni a vista, come le facciate torinesi, disegnato a filo di luce.
 * Vicino al puntatore i mattoni si accendono di un caldo color cotto e si sollevano,
 * un alone segue il cursore e il click genera un'onda che attraversa il muro.
 */
export function HeroBricks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.closest('section')
    const ctx = canvas?.getContext('2d')
    if (!canvas || !host || !ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Su touch/schermi piccoli: muro statico (niente onda continua né alone), si anima solo al tocco
    const lite = window.matchMedia('(pointer: coarse), (max-width: 767px)').matches
    const FRAME_MS = 1000 / 30
    let width = 0
    let height = 0
    let frame = 0

    // Puntatore: posizione reale, posizione smussata e intensità (entra/esce in dissolvenza)
    const target = { x: -9999, y: -9999, active: false }
    const pointer = { x: -9999, y: -9999, strength: 0 }
    const ripples: Ripple[] = []

    const resize = () => {
      const rect = host.getBoundingClientRect()
      const dpr = lite ? 1 : Math.min(window.devicePixelRatio || 1, 1.5)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (reducedMotion || (lite && !frame)) draw(0)
    }

    const draw = (time: number) => {
      const t = time / 1000
      ctx.clearRect(0, 0, width, height)

      // Alone morbido che segue il cursore
      if (pointer.strength > 0.01) {
        const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 340)
        glow.addColorStop(0, `rgba(9, 85, 165, ${0.16 * pointer.strength})`)
        glow.addColorStop(0.5, `rgba(9, 85, 165, ${0.06 * pointer.strength})`)
        glow.addColorStop(1, 'rgba(9, 85, 165, 0)')
        ctx.fillStyle = glow
        ctx.fillRect(0, 0, width, height)
      }

      const stepX = BRICK_W + JOINT
      const stepY = BRICK_H + JOINT
      const cx = width / 2
      const cy = height / 2
      const rows = Math.ceil(height / stepY) + 1
      const cols = Math.ceil(width / stepX) + 2
      const r2 = 2 * HOVER_RADIUS * HOVER_RADIUS
      ctx.lineWidth = 1

      for (let row = 0; row < rows; row++) {
        // Posa a correre: ogni fila è sfalsata di mezzo mattone
        const shift = row % 2 ? -stepX / 2 : 0
        for (let col = 0; col < cols; col++) {
          let x = col * stepX + shift
          let y = row * stepY
          const mx = x + BRICK_W / 2
          const my = y + BRICK_H / 2

          // Vignettatura ellittica: il muro svanisce verso i bordi
          const ex = (mx - cx) / (width * 0.62)
          const ey = (my - cy) / (height * 0.62)
          const edge = Math.max(0, 1 - (ex * ex + ey * ey))
          if (edge <= 0) continue

          // Luce radente lenta che scorre in diagonale anche senza interazione
          const wave = reducedMotion || lite ? 0 : (Math.sin(t * 0.5 + mx * 0.004 + my * 0.008) + 1) / 2

          let boost = 0
          let dx = mx - pointer.x
          let dy = my - pointer.y
          const d2 = dx * dx + dy * dy
          if (pointer.strength > 0.01 && d2 < r2 * 4) {
            const influence = Math.exp(-d2 / r2) * pointer.strength
            const d = Math.sqrt(d2) || 1
            x += (dx / d) * influence * LIFT
            y += (dy / d) * influence * LIFT * 0.6
            boost += influence
          }

          for (const rp of ripples) {
            const age = t - rp.t0
            const front = age * RIPPLE_SPEED
            dx = mx - rp.x
            dy = my - rp.y
            const d = Math.sqrt(dx * dx + dy * dy) || 1
            const band = Math.exp(-((d - front) ** 2) / 2200) * (1 - age / RIPPLE_LIFE)
            if (band > 0.01) {
              x += (dx / d) * band * 6
              y += (dy / d) * band * 4
              boost += band * 0.9
            }
          }

          boost = Math.min(boost, 1)

          // Dietro a logo e testi (fascia centrale) l'effetto si attenua per non disturbarne la lettura
          const tx = (mx - cx) / (width * 0.42)
          const ty = (my - cy) / (height * 0.34)
          const textSafe = 1 - 0.55 * Math.max(0, 1 - (tx * tx + ty * ty))
          boost *= textSafe

          roundedRect(ctx, x, y, BRICK_W, BRICK_H, 2)

          // Riempimento color cotto, scuro e opaco, solo dove passa il puntatore
          if (boost > 0.04) {
            const warm = Math.min(1, boost * 1.2) * Math.sqrt(edge)
            const fill = ctx.createLinearGradient(x, y, x, y + BRICK_H)
            fill.addColorStop(0, `rgba(176, 72, 34, ${0.55 * warm})`)
            fill.addColorStop(1, `rgba(112, 38, 16, ${0.5 * warm})`)
            ctx.fillStyle = fill
            ctx.fill()
          }

          // Bordo: azzurro a riposo, sfuma verso il cotto quando si accende (mai verso il bianco)
          const alpha = Math.min(0.55, (BASE_ALPHA + wave * 0.07 + boost * 0.32) * edge)
          const k = Math.min(1, boost * 1.6)
          const r = Math.round(147 + (214 - 147) * k)
          const g = Math.round(194 + (110 - 194) * k)
          const b = Math.round(247 + (72 - 247) * k)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
          ctx.stroke()
        }
      }
    }

    let visible = true
    let last = 0
    const loop = (time: number) => {
      frame = 0
      if (!visible) return
      const now = time / 1000
      while (ripples.length && now - ripples[0].t0 > RIPPLE_LIFE) ripples.shift()
      if (time - last >= FRAME_MS - 2) {
        last = time
        // Smussatura del movimento: il muro "insegue" il cursore con un po' di inerzia
        pointer.x += (target.x - pointer.x) * 0.2
        pointer.y += (target.y - pointer.y) * 0.2
        pointer.strength += ((target.active ? 1 : 0) - pointer.strength) * 0.1
        draw(time)
      }
      // In modalità lite il ciclo gira solo finché ci sono onde in corso
      if (!lite || ripples.length) frame = requestAnimationFrame(loop)
    }
    const kick = () => { if (!frame && visible) frame = requestAnimationFrame(loop) }

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect()
      target.x = e.clientX - rect.left
      target.y = e.clientY - rect.top
      if (!target.active) {
        // Al primo ingresso l'effetto parte direttamente dal cursore
        if (pointer.strength < 0.05) {
          pointer.x = target.x
          pointer.y = target.y
        }
        target.active = true
      }
    }
    const onLeave = () => { target.active = false }
    const onDown = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect()
      ripples.push({ x: e.clientX - rect.left, y: e.clientY - rect.top, t0: performance.now() / 1000 })
      kick()
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(host)

    if (reducedMotion) return () => ro.disconnect()

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (!visible) return
      if (lite) draw(0)
      else kick()
    })
    io.observe(host)

    if (!lite) {
      host.addEventListener('pointermove', onMove, { passive: true })
      host.addEventListener('pointerleave', onLeave)
    }
    host.addEventListener('pointerdown', onDown, { passive: true })
    if (!lite) kick()

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      io.disconnect()
      if (!lite) {
        host.removeEventListener('pointermove', onMove)
        host.removeEventListener('pointerleave', onLeave)
      }
      host.removeEventListener('pointerdown', onDown)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}
