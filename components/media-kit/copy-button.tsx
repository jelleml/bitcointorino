"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface CopyButtonProps {
  value: string
  label: string
  copiedLabel: string
  className?: string
}

export function CopyButton({ value, label, copiedLabel, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={copied ? copiedLabel : label}
      className={cn(
        "inline-flex items-center justify-center rounded-md border-2 border-border p-2 hover:border-bitcoin-blue hover:text-bitcoin-blue transition-colors",
        copied && "border-bitcoin-blue text-bitcoin-blue",
        className
      )}
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      <span className="sr-only" aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  )
}
