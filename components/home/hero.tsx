import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-[50px] pb-[50px] md:pb-[100px]"
      style={{
        background: 'linear-gradient(to bottom, #00020C, #00138E)',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          <div className="mb-10 w-full max-w-5xl flex justify-center">
            <Image
              src="/hero-logo-new.png"
              alt="Bitcoin Torino Logo"
              width={2400}
              height={900}
              className="w-full h-auto object-contain brightness-0 invert"
              priority
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="text-base text-black bg-white hover:bg-gray-100">
              <a href="https://t.me/bitcointorinochannel" target="_blank" rel="noopener noreferrer">
                Entra nel Canale
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base text-white border-white hover:bg-white hover:text-[#00138E]">
              <a href="https://luma.com/user/bitcointorino" target="_blank" rel="noopener noreferrer">
                Scopri gli Eventi
              </a>
            </Button>
          </div>
        </div>
      </div>


    </section>
  )
}
