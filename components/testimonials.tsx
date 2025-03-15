"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    company: "EcoTech Solutions",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "StartupAI's guidance helped me validate my business model and connect with the right investors. My startup secured $2M in seed funding within 3 months!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "DataFlow",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The AI-powered roadmap feature saved us months of planning. We avoided common pitfalls and scaled our tech team efficiently.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Angel Investor",
    company: "Horizon Ventures",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "As an investor, I recommend StartupAI to all founders in my portfolio. The platform helps them prepare better pitches and realistic growth plans.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Founder",
    company: "HealthSync",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The mentorship matching algorithm connected me with industry experts who helped refine our healthcare solution. Game-changer!",
    rating: 5,
  },
  {
    id: 5,
    name: "Emma Wilson",
    role: "Marketing Director",
    company: "GrowthLabs",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "StartupAI's market analysis tools helped us identify untapped segments and optimize our go-to-market strategy with precision.",
    rating: 4,
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
    setAutoplay(false)
  }

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
              Success Stories
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear from founders, investors, and mentors who have transformed their startup journey with our AI-powered
            platform.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-[#1a2942]/80 hover:bg-[#2a3a5a] text-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-[#1a2942]/80 hover:bg-[#2a3a5a] text-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="bg-gradient-to-br from-[#1a2942]/80 to-[#0d1b2a]/80 backdrop-blur-md rounded-2xl p-8 border border-[#2a3a5a] shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <Avatar className="h-20 w-20 border-2 border-[#00f5d4]">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback className="bg-[#2a3a5a]">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "h-5 w-5",
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500",
                              )}
                            />
                          ))}
                        </div>

                        <blockquote className="text-lg md:text-xl text-gray-200 italic mb-4">
                          "{testimonial.quote}"
                        </blockquote>

                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h4 className="font-bold text-white">{testimonial.name}</h4>
                            <p className="text-gray-400">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <div className="h-8 w-24 bg-gray-800 rounded flex items-center justify-center">
                              <span className="text-xs font-medium text-gray-300">{testimonial.company}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                title={`Go to slide ${index + 1}`}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-[#00f5d4] w-8" : "bg-gray-600 hover:bg-gray-500",
                )}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

