import { Features } from "@/components/features"
import { Hero } from "@/components/hero"
import { FAQs } from "@/components/faqs"
import Header from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <Features />
        <FAQs />
        <Footer/>
      </main>
    </div>
  )
}

