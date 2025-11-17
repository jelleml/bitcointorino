import { Hero } from "@/components/home/hero"
import { Partners } from "@/components/home/partners"
import { AnimatedBackground } from "@/components/home/animated-background"
import { About } from "@/components/home/about"
<<<<<<< HEAD
import { NextEvent } from "@/components/home/next-event"
=======
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
import { generateOrganizationStructuredData } from "@/lib/seo"

export default function Home() {
  const structuredData = generateOrganizationStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <About />
<<<<<<< HEAD
        <NextEvent />
=======
>>>>>>> cec4e76d646139098b0b827bd2c3c6c2514d8809
        <Partners />
      </div>
    </>
  )
}

