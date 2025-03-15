"use client"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "👋 Hi there! I'm your AI startup assistant. How can I help you today?",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([...chatHistory, { role: "user", content: message }])
    setMessage("")
    setIsTyping(true)

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Thanks for your message! I'd be happy to help with your startup questions. Would you like information about funding, business validation, or mentorship?",
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50 ${
          isOpen ? "bg-[#6c5ce7]" : "bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7]"
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[350px] bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] rounded-2xl shadow-xl border border-[#2a3a5a] overflow-hidden z-50"
          >
            <div className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] p-4">
              <h3 className="text-black font-bold">AI Startup Assistant</h3>
              <p className="text-black/80 text-sm">Ask me anything about your startup journey</p>
            </div>

            <div className="h-[350px] overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      chat.role === "user"
                        ? "bg-[#6c5ce7] text-white rounded-tr-none"
                        : "bg-[#2a3a5a] text-white rounded-tl-none"
                    }`}
                  >
                    {chat.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-[#2a3a5a] text-white rounded-tl-none">
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

            <form onSubmit={handleSubmit} className="p-4 border-t border-[#2a3a5a] bg-[#0d1b2a]">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-[#1a2942] border-[#2a3a5a] focus:border-[#00f5d4] focus:ring-1 focus:ring-[#00f5d4] text-white"
                />
                <Button
                  type="submit"
                  disabled={!message.trim() || isTyping}
                  className="bg-[#00f5d4] hover:bg-[#00f5d4]/80 text-black"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

