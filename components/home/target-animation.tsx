"use client"

import { useEffect, useRef } from "react"

export function TargetAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // High-DPI support
    const dpr = window.devicePixelRatio || 1
    const size = 200
    canvas.width = size * dpr
    canvas.height = size * dpr
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
    ctx.scale(dpr, dpr)

    const cx = size / 2
    const cy = size / 2
    const duration = 3200

    // Particles
    const particleCount = 16
    const particles = Array.from({ length: particleCount }, (_, i) => {
      const angle = (i / particleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.3
      return {
        angle,
        speed: 0.7 + Math.random() * 0.6,
        size: 1.5 + Math.random() * 2.5,
      }
    })

    let animId: number

    function draw(time: number) {
      if (!ctx) return
      ctx.clearRect(0, 0, size, size)

      const t = (time % duration) / duration

      // --- Target rings with glow ---
      ctx.lineCap = "round"

      // Outer ring
      ctx.strokeStyle = "rgba(255,255,255,0.2)"
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(cx, cy, 80, 0, Math.PI * 2)
      ctx.stroke()

      // Middle ring
      ctx.strokeStyle = "rgba(255,255,255,0.35)"
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(cx, cy, 55, 0, Math.PI * 2)
      ctx.stroke()

      // Inner ring
      ctx.strokeStyle = "rgba(255,255,255,0.55)"
      ctx.lineWidth = 3.5
      ctx.beginPath()
      ctx.arc(cx, cy, 30, 0, Math.PI * 2)
      ctx.stroke()

      // Crosshair lines (subtle)
      ctx.strokeStyle = "rgba(255,255,255,0.12)"
      ctx.lineWidth = 1.5
      // Vertical
      ctx.beginPath()
      ctx.moveTo(cx, cy - 80)
      ctx.lineTo(cx, cy - 10)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(cx, cy + 10)
      ctx.lineTo(cx, cy + 80)
      ctx.stroke()
      // Horizontal
      ctx.beginPath()
      ctx.moveTo(cx - 80, cy)
      ctx.lineTo(cx - 10, cy)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(cx + 10, cy)
      ctx.lineTo(cx + 80, cy)
      ctx.stroke()

      // Ring pulse on impact
      if (t > 0.42 && t < 0.68) {
        const pulseT = (t - 0.42) / 0.26
        const pulseScale = 1 + pulseT * 0.25
        const pulseAlpha = 0.5 * (1 - pulseT)
        ctx.strokeStyle = `rgba(255,255,255,${pulseAlpha})`
        ctx.lineWidth = 2.5
        ctx.beginPath()
        ctx.arc(cx, cy, 30 * pulseScale, 0, Math.PI * 2)
        ctx.stroke()
        // Second outer pulse
        ctx.strokeStyle = `rgba(255,255,255,${pulseAlpha * 0.4})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(cx, cy, 55 * pulseScale, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Center dot with pulse
      const dotScale = (t > 0.42 && t < 0.58)
        ? 1 + Math.sin((t - 0.42) / 0.16 * Math.PI) * 1.2
        : 1
      // Glow
      if (dotScale > 1) {
        const glowGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 12 * dotScale)
        glowGrad.addColorStop(0, `rgba(255,255,255,${0.4 * (dotScale - 1) / 1.2})`)
        glowGrad.addColorStop(1, "rgba(255,255,255,0)")
        ctx.fillStyle = glowGrad
        ctx.beginPath()
        ctx.arc(cx, cy, 12 * dotScale, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.fillStyle = "rgba(255,255,255,0.95)"
      ctx.beginPath()
      ctx.arc(cx, cy, 5 * dotScale, 0, Math.PI * 2)
      ctx.fill()

      // --- Arrow (sleek, with trail) ---
      if (t < 0.65) {
        const arrowPhase = Math.min(t / 0.42, 1)
        const eased = 1 - Math.pow(1 - arrowPhase, 4) // ease out quartic

        const startX = cx - 130
        const startY = cy - 130
        const arrowX = startX + (cx - startX) * eased
        const arrowY = startY + (cy - startY) * eased

        let arrowAlpha = 1
        if (t < 0.06) arrowAlpha = t / 0.06
        if (t > 0.50) arrowAlpha = Math.max(0, 1 - (t - 0.50) / 0.15)

        const angle = Math.atan2(cy - startY, cx - startX)

        // Motion trail
        if (arrowPhase < 1) {
          const trailLen = 35
          for (let i = 0; i < 8; i++) {
            const trailT = i / 8
            const tx = arrowX - Math.cos(angle) * trailLen * trailT
            const ty = arrowY - Math.sin(angle) * trailLen * trailT
            ctx.fillStyle = `rgba(255,255,255,${arrowAlpha * 0.15 * (1 - trailT)})`
            ctx.beginPath()
            ctx.arc(tx, ty, 1.5 * (1 - trailT), 0, Math.PI * 2)
            ctx.fill()
          }
        }

        ctx.save()
        ctx.globalAlpha = arrowAlpha
        ctx.translate(arrowX, arrowY)
        ctx.rotate(angle)

        // Arrow shaft (tapered)
        ctx.strokeStyle = "white"
        ctx.lineWidth = 3.5
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(-28, 0)
        ctx.lineTo(4, 0)
        ctx.stroke()

        // Sleek arrowhead (filled triangle)
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.moveTo(12, 0)
        ctx.lineTo(-2, -6)
        ctx.lineTo(0, 0)
        ctx.lineTo(-2, 6)
        ctx.closePath()
        ctx.fill()

        // Fletching (tail feathers)
        ctx.strokeStyle = "rgba(255,255,255,0.6)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(-24, 0)
        ctx.lineTo(-30, -5)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(-24, 0)
        ctx.lineTo(-30, 5)
        ctx.stroke()

        ctx.restore()
      }

      // --- Impact flash ---
      if (t > 0.41 && t < 0.60) {
        const flashT = (t - 0.41) / 0.19
        const flashRadius = 6 + flashT * 35
        const flashAlpha = 0.6 * (1 - flashT)
        const flashGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, flashRadius)
        flashGrad.addColorStop(0, `rgba(255,255,255,${flashAlpha})`)
        flashGrad.addColorStop(0.5, `rgba(255,255,255,${flashAlpha * 0.3})`)
        flashGrad.addColorStop(1, "rgba(255,255,255,0)")
        ctx.fillStyle = flashGrad
        ctx.beginPath()
        ctx.arc(cx, cy, flashRadius, 0, Math.PI * 2)
        ctx.fill()
      }

      // --- Particles burst ---
      if (t > 0.42 && t < 0.92) {
        const pT = (t - 0.42) / 0.50
        particles.forEach((p) => {
          const dist = pT * 75 * p.speed
          const px = cx + Math.cos(p.angle) * dist
          const py = cy + Math.sin(p.angle) * dist
          const alpha = Math.max(0, 1 - pT * 1.3)
          const pSize = p.size * (1 - pT * 0.7)

          // Particle glow
          const pGrad = ctx.createRadialGradient(px, py, 0, px, py, pSize * 2)
          pGrad.addColorStop(0, `rgba(255,255,255,${alpha})`)
          pGrad.addColorStop(1, `rgba(255,255,255,0)`)
          ctx.fillStyle = pGrad
          ctx.beginPath()
          ctx.arc(px, py, pSize * 2, 0, Math.PI * 2)
          ctx.fill()

          // Particle core
          ctx.fillStyle = `rgba(255,255,255,${alpha})`
          ctx.beginPath()
          ctx.arc(px, py, pSize, 0, Math.PI * 2)
          ctx.fill()
        })
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="flex justify-center mb-10">
      <canvas
        ref={canvasRef}
        className="block"
        style={{ width: "200px", height: "200px" }}
        aria-hidden="true"
      />
    </div>
  )
}
