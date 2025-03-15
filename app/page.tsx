import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Testimonials } from "@/components/testimonials"
import { AiQaSection } from "@/components/ai-qa-section"
import { NewsSection } from "@/components/news-section"
import { Dashboard } from "@/components/dashboard"
import { Footer } from "@/components/footer"
import { ChatButton } from "@/components/chat-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#0d1b2a] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <Testimonials />
        <AiQaSection />
        <NewsSection />
        <Dashboard />
      </main>
      <Footer />
      <ChatButton />
    </div>
  )
}

