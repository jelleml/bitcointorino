'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertCircle, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Unhandled error in [locale] segment:', error)
  }, [error])

  return (
    <div className="section-alt min-h-[70vh] flex flex-col items-center justify-center p-4 py-24 text-center">
      <div className="relative mb-8 h-24 w-24 animate-float">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(239,68,68,0.2),transparent)]" />
        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-red-500/30 bg-red-50 dark:bg-red-950/40">
          <AlertCircle className="h-11 w-11 text-red-600 dark:text-red-400" />
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        <span className="text-gradient">Qualcosa è andato storto</span>
      </h2>
      <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md mx-auto">
        Si è verificato un errore durante il caricamento della pagina. Abbiamo notificato il team tecnico.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => reset()}>
          <RefreshCcw className="mr-2 h-4 w-4" />
          Riprova
        </Button>
        <Button variant="outline" asChild>
          <a href="/">Torna alla Home</a>
        </Button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-12 p-4 bg-muted rounded text-left overflow-auto max-w-2xl w-full">
          <p className="font-mono text-sm text-red-600 dark:text-red-400 mb-2">Error: {error.message}</p>
          <pre className="font-mono text-xs text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
            {error.stack}
          </pre>
        </div>
      )}
    </div>
  )
}
