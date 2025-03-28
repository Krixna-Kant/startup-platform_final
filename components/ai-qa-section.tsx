"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqItems = [
  {
    question: "How do I validate my startup idea?",
    answer:
      "To validate your startup idea, start by identifying your target market and conducting customer interviews. Validate demand through surveys, landing pages, and early sign-ups. Use our AI Business Validator to analyze market potential, competition, and feasibility. Additionally, launching an MVP (Minimum Viable Product) allows real users to interact with your solution and provide feedback. Startups that follow a structured validation process have a 60% higher chance of success in securing early investment. Would you like assistance in structuring your idea validation plan?",
  },
  {
    question: "What should be in my pitch deck?",
    answer:
      "An effective pitch deck should include: \n1) A strong problem statement that outlines the pain points. \n2) A clear and innovative solution that your startup offers. \n3) Market opportunity backed by research and statistics. \n4) Business model explaining how your company generates revenue. \n5) Traction and key milestones to show progress. \n6) Competitive analysis to highlight your differentiator. \n7) Team introduction, showcasing expertise and roles. \n8) Financial projections for sustainability. \n9) Funding ask with a plan on how the funds will be used. Our AI tool can generate an optimized pitch deck template tailored to your industry and target investors.",
  },
  {
    question: "How do I find the right investors?",
    answer:
      "Finding the right investors requires researching those who invest in your industry, startup stage, and geographic region. Start by networking at industry events and joining accelerator programs. Use platforms like AngelList, Crunchbase, and LinkedIn to identify potential investors. Our AI-powered Investor Matching tool analyzes your startup profile and suggests relevant investors based on their past investments. We also provide introduction strategies, email templates, and warm contact opportunities through our mentor network to increase your chances of securing funding.",
  },
]

export function AiQaSection() {
  const [question, setQuestion] = useState("")
  const [isAsking, setIsAsking] = useState(false)
  const [conversation, setConversation] = useState([])
  
  // Function to call Gemini API
  const callGeminiApi = async (userQuestion) => {
    try {
      // Use environment variable for API key
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("API key not found in environment variables");
      }
      
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful AI assistant specialized in startup advice. 
                  Provide concise, actionable answers to the following startup-related question: ${userQuestion}
                  Include relevant statistics or best practices when applicable. Keep your response focused and under 150 words.`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()
      return data.candidates[0].content.parts[0].text
    } catch (error) {
      console.error("Error calling Gemini API:", error)
      return "Sorry, I encountered an error processing your question. Please check your API key in the environment variables or try again later."
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim()) return

    // Add user message to conversation
    const updatedConversation = [...conversation, { role: "user", content: question }]
    setConversation(updatedConversation)
    setIsAsking(true)
    
    try {
      // Get response from Gemini API
      const aiResponse = await callGeminiApi(question)
      
      // Add AI response to conversation
      setConversation([
        ...updatedConversation,
        { role: "assistant", content: aiResponse }
      ])
    } catch (error) {
      // Handle error
      setConversation([
        ...updatedConversation,
        { role: "assistant", content: "Sorry, I encountered an error. Please check that the NEXT_PUBLIC_GEMINI_API_KEY environment variable is set correctly." }
      ])
    } finally {
      setIsAsking(false)
      setQuestion("")
    }
  }

  return (
    <section className="py-20 flex justify-center items-center min-h-screen bg-[#0a192f]">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
              AI-Powered Startup Q&A
            </span>
          </h2>
          <p className="text-gray-300 mt-2">
            Get instant answers to your startup questions from our AI assistant, powered by Google's Gemini API.
          </p>
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="flex justify-center bg-[#1a2942] rounded-lg p-2 space-x-4">
            <TabsTrigger value="faq" className="text-white hover:text-[#00f5d4] px-4 py-2 transition">
              FAQ
            </TabsTrigger>
            <TabsTrigger value="ai-assistant" className="text-white hover:text-[#00f5d4] px-4 py-2 transition">
              AI Assistant
            </TabsTrigger>
          </TabsList>

          {/* FAQ Section */}
          <TabsContent value="faq">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-white text-center">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#2a3a5a]">
                    <AccordionTrigger className="text-white hover:text-[#00f5d4] transition-colors py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 whitespace-pre-line">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </TabsContent>

          {/* AI Assistant Section */}
          <TabsContent value="ai-assistant">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1a2942] p-6 rounded-2xl border border-[#2a3a5a] shadow-xl mt-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-white text-center">Ask Our AI Assistant</h3>
              <div className="h-[400px] flex flex-col">
                <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2 custom-scrollbar">
                  {conversation.length === 0 ? (
                    <div className="text-center text-gray-400 mt-20">
                      <p>Ask any startup-related question to get started</p>
                    </div>
                  ) : (
                    conversation.map((message, index) => (
                      <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-[#6c5ce7] text-white rounded-tr-none"
                            : "bg-[#1a2942] text-white rounded-tl-none"
                        }`}>
                          {message.content}
                          {message.role === "assistant" && isAsking && index === conversation.length - 1 && (
                            <span className="inline-block animate-pulse">...</span>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                  {isAsking && conversation.length === 0 && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-[#1a2942] text-white rounded-tl-none">
                        <span className="inline-block animate-pulse">Thinking...</span>
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}