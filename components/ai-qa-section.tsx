"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqItems = [
  {
    question: "How do I validate my startup idea?",
    answer:
      "To validate your startup idea, start by identifying your target market and conducting customer interviews. Use our AI Business Validator to analyze market potential, competition, and feasibility. Create an MVP (Minimum Viable Product) to test with real users and gather feedback. Our platform provides step-by-step guidance and tools for each validation stage.",
  },
  {
    question: "What should be in my pitch deck?",
    answer:
      "An effective pitch deck should include: 1) Problem statement, 2) Your solution, 3) Market opportunity, 4) Business model, 5) Traction and milestones, 6) Competitive analysis, 7) Team introduction, 8) Financial projections, and 9) Funding ask. Our AI can help you create a customized pitch deck template based on your specific industry and investor targets.",
  },
  {
    question: "How do I find the right investors?",
    answer:
      "Finding the right investors involves researching those who invest in your industry, stage, and geographic location. Our platform's Investor Matching tool analyzes your startup profile and suggests relevant investors based on their past investments and stated preferences. We also provide introduction strategies and warm contact opportunities through our mentor network.",
  },
  {
    question: "When should I incorporate my startup?",
    answer:
      "You should consider incorporating when: 1) You're ready to raise funding, 2) You're generating revenue, 3) You need liability protection, or 4) You're bringing on co-founders or employees. The timing varies based on your business model and growth plans. Our Startup Roadmap tool can provide personalized recommendations based on your specific situation.",
  },
  {
    question: "How much equity should I give to co-founders and early employees?",
    answer:
      "Equity distribution depends on various factors including each person's role, experience, and contributions. Typically, co-founders might split equity relatively equally (e.g., 50/50 or 60/40), while early employees might receive 0.5-2%. Our Equity Calculator tool can help you model different scenarios based on industry standards and your specific situation.",
  },
]

export function AiQaSection() {
  const [question, setQuestion] = useState("")
  const [isAsking, setIsAsking] = useState(false)
  const [conversation, setConversation] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!question.trim()) return

    // Add user question to conversation
    setConversation([...conversation, { role: "user", content: question }])
    setIsAsking(true)

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      setConversation([
        ...conversation,
        { role: "user", content: question },
        {
          role: "assistant",
          content: `Based on your question about "${question}", I recommend focusing on market validation first. Start by identifying your target customers and their specific pain points. Our data shows that startups that conduct at least 20 customer interviews before building their product have a 30% higher success rate. Would you like me to help you create a customer interview template?`,
        },
      ])
      setIsAsking(false)
      setQuestion("")
    }, 1500)
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0d1b2a] to-[#0a192f] z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
              AI-Powered Startup Q&A
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get instant answers to your startup questions from our AI assistant, trained on insights from successful
            founders and investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FAQ Accordion */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold mb-6 text-white">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#2a3a5a]">
                  <AccordionTrigger className="text-white hover:text-[#00f5d4] transition-colors py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* AI Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-[#1a2942]/80 to-[#0d1b2a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#2a3a5a] shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Ask Our AI Assistant</h3>

            <div className="h-[400px] flex flex-col">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar">
                {conversation.length === 0 ? (
                  <div className="text-center text-gray-400 mt-20">
                    <p>Ask any startup-related question to get started</p>
                  </div>
                ) : (
                  conversation.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-[#6c5ce7] text-white rounded-tr-none"
                            : "bg-[#1a2942] text-white rounded-tl-none"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))
                )}
                {isAsking && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-[#1a2942] text-white rounded-tl-none">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#00f5d4] animate-bounce"></div>
                        <div
                          className="w-2 h-2 rounded-full bg-[#00f5d4] animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-[#00f5d4] animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Ask about funding, pitching, team building..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="bg-[#1a2942] border-[#2a3a5a] focus:border-[#00f5d4] focus:ring-1 focus:ring-[#00f5d4] text-white"
                />
                <Button
                  type="submit"
                  disabled={!question.trim() || isAsking}
                  className="bg-[#00f5d4] hover:bg-[#00f5d4]/80 text-black"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

