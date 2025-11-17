import Link from "next/link"
import { Separator } from "@/components/ui/separator"
<<<<<<< HEAD
import { Send, Mail, MapPin } from "lucide-react"
=======
import { Twitter, Send, Mail, MapPin } from "lucide-react"
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809

export function Footer() {

  return (
<<<<<<< HEAD
    <footer className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-black dark:text-white">
=======
    <footer className="bg-black text-white">
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
      <div className="container mx-auto px-4 py-12">

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">₿</span> Bitcoin Torino
            </h3>
<<<<<<< HEAD
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Associazione dedicata alla promozione e sviluppo dell&apos;ecosistema Bitcoin 
              a Torino e dintorni.
            </p>
            <div className="flex items-start space-x-2 text-gray-600 dark:text-gray-300">
=======
            <p className="text-gray-300 mb-4">
              Associazione dedicata alla promozione e sviluppo dell&apos;ecosistema Bitcoin 
              a Torino e dintorni.
            </p>
            <div className="flex items-start space-x-2 text-gray-300">
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>Torino, Italia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
<<<<<<< HEAD
                <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-bitcoin-blue transition-colors">
=======
                <Link href="/" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
                  Home
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/ecosystem" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  FAQ
=======
                <Link href="/eventi" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  Eventi
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-bitcoin-blue-light transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contatti</h3>
            <div className="flex space-x-4">
              <a
                href="https://t.me/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-bitcoin-blue transition-colors"
=======
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-bitcoin-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://t.me/bitcointorino"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-bitcoin-blue transition-colors"
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:info@bitcointorino.it"
<<<<<<< HEAD
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-bitcoin-blue transition-colors"
=======
                className="p-3 bg-gray-800 rounded-full hover:bg-bitcoin-blue transition-colors"
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
                aria-label="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <Separator className="bg-gray-200 dark:bg-gray-700 mb-6" />

        {/* Copyright */}
        <div className="text-center text-gray-500 dark:text-gray-400">
=======
        <Separator className="bg-gray-700 mb-6" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
          <p>&copy; {new Date().getFullYear()} Bitcoin Torino. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

