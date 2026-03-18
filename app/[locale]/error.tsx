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
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="bg-red-50 p-6 rounded-full mb-6">
        <AlertCircle className="h-12 w-12 text-red-600" />
      </div>
      <h2 className="text-3xl font-bold mb-4">Qualcosa è andato storto</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
        Si è verificato un errore durante il caricamento della pagina. Abbiamo notificato il team tecnico.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => reset()}
          className="bg-bitcoin-blue hover:bg-bitcoin-blue/90"
        >
          <RefreshCcw className="mr-2 h-4 w-4" />
          Riprova
        </Button>
        <Button variant="outline" asChild>
          <a href="/">Torna alla Home</a>
        </Button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-12 p-4 bg-gray-100 rounded text-left overflow-auto max-w-2xl w-full">
          <p className="font-mono text-sm text-red-600 mb-2">Error: {error.message}</p>
          <pre className="font-mono text-xs text-gray-700 whitespace-pre-wrap">
            {error.stack}
          </pre>
        </div>
      )}
    </div>
  )
}
