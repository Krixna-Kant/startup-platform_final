"use client"

import { useState } from "react"
import { ExternalLink, Calendar, Clock, Play } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const newsItems = [
  {
    id: 1,
    title: "AI Startups Raised $45B in 2024 Q1, Setting New Record",
    description:
      "Venture capital investments in AI startups have reached unprecedented levels, with early-stage companies securing the majority of funding.",
    source: "TechCrunch",
    date: "2024-03-15",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "New Regulations for Fintech Startups: What Founders Need to Know",
    description:
      "Recent regulatory changes will impact how fintech startups operate. Learn about compliance requirements and deadlines.",
    source: "Forbes",
    date: "2024-03-10",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Remote-First Startups Show 28% Higher Retention Rates",
    description:
      "A new study reveals that startups embracing remote work policies are experiencing significantly better employee retention and satisfaction.",
    source: "Harvard Business Review",
    date: "2024-03-05",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Sustainable Startups Attract 3x More Gen-Z Customers",
    description:
      "Companies with clear sustainability initiatives are seeing dramatic growth in younger customer segments, according to market research.",
    source: "Bloomberg",
    date: "2024-02-28",
    image: "/placeholder.svg?height=200&width=350",
    url: "#",
    readTime: "4 min read",
  },
]

const videoItems = [
  {
    id: 1,
    title: "How to Create a Winning Pitch Deck: Step-by-Step Guide",
    channel: "Startup Mastery",
    views: "245K views",
    date: "2024-03-12",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "18:42",
    url: "#",
  },
  {
    id: 2,
    title: "Investor Psychology: What VCs Really Look For in Founders",
    channel: "Venture Insights",
    views: "189K views",
    date: "2024-03-08",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "24:15",
    url: "#",
  },
  {
    id: 3,
    title: "From Zero to $10M: Our Bootstrapping Journey",
    channel: "Founder Stories",
    views: "312K views",
    date: "2024-03-01",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "32:07",
    url: "#",
  },
  {
    id: 4,
    title: "Growth Hacking Strategies That Actually Work in 2024",
    channel: "Marketing Genius",
    views: "178K views",
    date: "2024-02-25",
    thumbnail: "/placeholder.svg?height=200&width=350",
    duration: "15:33",
    url: "#",
  },
]

export function NewsSection() {
  const [activeTab, setActiveTab] = useState("news")

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
              Trending Startup News & Videos
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends, funding news, and expert advice in the startup ecosystem.
          </p>
        </div>

        <Tabs defaultValue="news" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-[#1a2942] border border-[#2a3a5a]">
              <TabsTrigger value="news" className="data-[state=active]:bg-[#6c5ce7] data-[state=active]:text-white">
                Latest News
              </TabsTrigger>
              <TabsTrigger value="videos" className="data-[state=active]:bg-[#6c5ce7] data-[state=active]:text-white">
                Trending Videos
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="news" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1a2942]/80 to-[#0d1b2a]/80 backdrop-blur-md rounded-xl overflow-hidden border border-[#2a3a5a] shadow-lg hover:shadow-[#6c5ce7]/20 hover:border-[#6c5ce7]/50 transition-all duration-300"
                >
                  <div className="relative">
                    <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-3 left-3 bg-[#6c5ce7] text-white text-xs font-medium px-2 py-1 rounded">
                      {item.source}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg text-white mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{item.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.readTime}
                      </div>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#00f5d4] hover:text-[#00f5d4]/80 text-sm font-medium"
                    >
                      Read Full Article
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button className="bg-[#1a2942] hover:bg-[#2a3a5a] text-white border border-[#2a3a5a]">
                View All News
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1a2942]/80 to-[#0d1b2a]/80 backdrop-blur-md rounded-xl overflow-hidden border border-[#2a3a5a] shadow-lg hover:shadow-[#6c5ce7]/20 hover:border-[#6c5ce7]/50 transition-all duration-300"
                >
                  <div className="relative group">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-[#00f5d4] rounded-full p-3">
                        <Play className="h-6 w-6 text-black fill-black" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                      {item.duration}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg text-white mb-2 line-clamp-2">{item.title}</h3>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="text-sm text-gray-300">{item.channel}</div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div>{item.views}</div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(item.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button className="bg-[#1a2942] hover:bg-[#2a3a5a] text-white border border-[#2a3a5a]">
                View All Videos
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

