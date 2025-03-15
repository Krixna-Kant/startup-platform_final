"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LineChart, CheckCircle2, Clock, Calendar, Users, TrendingUp, DollarSign, FileText, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  // Simulated startup journey progress
  const journeySteps = [
    { id: 1, name: "Idea Validation", completed: true, progress: 100 },
    { id: 2, name: "Market Research", completed: true, progress: 100 },
    { id: 3, name: "MVP Development", completed: true, progress: 100 },
    { id: 4, name: "User Testing", completed: true, progress: 100 },
    { id: 5, name: "Business Model", completed: false, progress: 65 },
    { id: 6, name: "Pitch Deck", completed: false, progress: 40 },
    { id: 7, name: "Funding", completed: false, progress: 10 },
    { id: 8, name: "Team Building", completed: false, progress: 25 },
  ]

  // Simulated upcoming mentorship sessions
  const mentorshipSessions = [
    {
      id: 1,
      mentor: "Alex Rivera",
      role: "Product Strategy",
      company: "ProductLabs",
      date: "2024-03-18",
      time: "10:00 AM",
      topic: "Product-Market Fit",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      mentor: "Sophia Chen",
      role: "Angel Investor",
      company: "TechAngels",
      date: "2024-03-20",
      time: "2:30 PM",
      topic: "Pitch Deck Review",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  // Simulated saved business plans
  const businessPlans = [
    { id: 1, name: "SaaS Growth Strategy", lastEdited: "2024-03-10", progress: 85 },
    { id: 2, name: "Marketing Plan Q2", lastEdited: "2024-03-05", progress: 60 },
    { id: 3, name: "Investor Pitch v2", lastEdited: "2024-03-15", progress: 95 },
  ]

  // Simulated funding recommendations
  const fundingRecommendations = [
    {
      id: 1,
      name: "TechStars Accelerator",
      type: "Accelerator",
      focus: "SaaS, AI, Fintech",
      deadline: "2024-04-15",
      match: 92,
    },
    {
      id: 2,
      name: "Horizon Ventures",
      type: "Seed Fund",
      focus: "Healthcare, AI",
      deadline: "2024-04-30",
      match: 87,
    },
    {
      id: 3,
      name: "Innovation Grant",
      type: "Government Grant",
      focus: "Sustainability, CleanTech",
      deadline: "2024-05-10",
      match: 78,
    },
  ]

  if (!isLoggedIn) {
    return (
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
                Personalized Startup Dashboard
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Track your startup journey, access mentorship sessions, manage business plans, and discover funding
              opportunities tailored to your needs.
            </p>
            <Button
              onClick={toggleLogin}
              className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-black font-bold text-lg px-8 py-6 rounded-xl hover:shadow-lg hover:shadow-[#00f5d4]/20 transition-all"
            >
              Login to Access Your Dashboard
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1a2942]/80 to-[#0d1b2a]/80 backdrop-blur-md rounded-2xl p-6 border border-[#2a3a5a] shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="text-center p-8">
                  <div className="inline-block p-4 bg-[#6c5ce7] rounded-full mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Login Required</h3>
                  <p className="text-gray-300 mb-6">Sign in to access your personalized startup dashboard</p>
                  <Button onClick={toggleLogin} className="bg-[#00f5d4] hover:bg-[#00f5d4]/80 text-black font-medium">
                    Login Now
                  </Button>
                </div>
              </div>

              <div className="opacity-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <Card className="bg-[#1a2942] border-[#2a3a5a] text-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Startup Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">58%</div>
                      <Progress value={58} className="h-2 mt-2 bg-[#2a3a5a]" />
                    </CardContent>
                  </Card>

                  <Card className="bg-[#1a2942] border-[#2a3a5a] text-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">2</div>
                      <div className="text-sm text-gray-400 mt-1">Next: Mar 18, 10:00 AM</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#1a2942] border-[#2a3a5a] text-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Funding Matches</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">12</div>
                      <div className="text-sm text-gray-400 mt-1">3 new this week</div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-[#1a2942] border-[#2a3a5a] text-white">
                    <CardHeader>
                      <CardTitle>Startup Journey</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {journeySteps.slice(0, 4).map((step) => (
                          <div key={step.id} className="flex items-center">
                            <div
                              className={cn(
                                "h-8 w-8 rounded-full flex items-center justify-center mr-3",
                                step.completed ? "bg-[#00f5d4]" : "bg-[#2a3a5a]",
                              )}
                            >
                              {step.completed ? (
                                <CheckCircle2 className="h-5 w-5 text-black" />
                              ) : (
                                <Clock className="h-5 w-5 text-gray-400" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className={step.completed ? "text-white" : "text-gray-400"}>{step.name}</span>
                                <span className="text-sm text-gray-400">{step.progress}%</span>
                              </div>
                              <Progress value={step.progress} className="h-1.5 bg-[#2a3a5a]" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#1a2942] border-[#2a3a5a] text-white">
                    <CardHeader>
                      <CardTitle>Upcoming Mentorship</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mentorshipSessions.slice(0, 2).map((session) => (
                          <div key={session.id} className="flex items-start">
                            <div className="h-10 w-10 rounded-full bg-gray-700 mr-3 overflow-hidden">
                              <img
                                src={session.image || "/placeholder.svg"}
                                alt={session.mentor}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{session.mentor}</div>
                              <div className="text-sm text-gray-400">
                                {session.role}, {session.company}
                              </div>
                              <div className="flex items-center mt-1 text-xs text-gray-400">
                                <Calendar className="h-3 w-3 mr-1" />
                                {new Date(session.date).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}{" "}
                                at {session.time}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
              Your Startup Dashboard
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track your progress, access resources, and get personalized recommendations for your startup journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Card className="bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border-[#2a3a5a] text-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <LineChart className="h-5 w-5 mr-2 text-[#00f5d4]" />
                  Startup Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white">58%</div>
                <Progress
                  value={58}
                  className="h-2 mt-2 bg-[#2a3a5a]"
                  indicatorColor="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7]"
                />
                <div className="text-sm text-gray-400 mt-2">4/8 milestones completed</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border-[#2a3a5a] text-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="h-5 w-5 mr-2 text-[#00f5d4]" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white">2</div>
                <div className="flex items-center mt-2">
                  <div className="h-2 w-2 rounded-full bg-[#00f5d4] mr-2"></div>
                  <div className="text-sm text-gray-300">Next: Mar 18, 10:00 AM</div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-[#6c5ce7] mr-2"></div>
                  <div className="text-sm text-gray-300">Product-Market Fit</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border-[#2a3a5a] text-white shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-lg">
                  <DollarSign className="h-5 w-5 mr-2 text-[#00f5d4]" />
                  Funding Matches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-white">12</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm text-gray-300">Match Score</div>
                  <div className="text-sm font-medium text-[#00f5d4]">92%</div>
                </div>
                <Progress value={92} className="h-1.5 mt-1 bg-[#2a3a5a]" indicatorColor="bg-[#00f5d4]" />
                <div className="text-sm text-gray-400 mt-2">3 new this week</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border-[#2a3a5a] text-white h-full shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-[#00f5d4]" />
                  Startup Journey
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Track your progress through key startup milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {journeySteps.map((step) => (
                    <div key={step.id} className="flex items-center">
                      <div
                        className={cn(
                          "h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0",
                          step.completed ? "bg-[#00f5d4]" : "bg-[#2a3a5a]",
                        )}
                      >
                        {step.completed ? (
                          <CheckCircle2 className="h-6 w-6 text-black" />
                        ) : (
                          <Clock className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className={cn("font-medium", step.completed ? "text-white" : "text-gray-300")}>
                            {step.name}
                          </span>
                          <span className="text-sm text-gray-400">{step.progress}%</span>
                        </div>
                        <Progress
                          value={step.progress}
                          className="h-2 bg-[#2a3a5a]"
                          indicatorColor={
                            step.completed ? "bg-[#00f5d4]" : "bg-gradient-to-r from-[#6c5ce7] to-[#00f5d4]"
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button className="bg-[#6c5ce7] hover:bg-[#6c5ce7]/80 text-white w-full">Update Progress</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card className="bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border-[#2a3a5a] text-white h-full shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-[#00f5d4]" />
                  Upcoming Mentorship
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Your scheduled sessions with industry experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mentorshipSessions.map((session) => (
                    <div key={session.id} className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-[#2a3a5a] mr-4 overflow-hidden border-2 border-[#6c5ce7]">
                        <img
                          src={session.image || "/placeholder.svg"}
                          alt={session.mentor}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">{session.mentor}</div>
                        <div className="text-sm text-gray-400">
                          {session.role}, {session.company}
                        </div>
                        <div className="text-sm text-[#00f5d4] mt-1">{session.topic}</div>
                        <div className="flex items-center mt-2 text-xs text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(session.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}{" "}
                          at {session.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  <Button className="bg-[#00f5d4] hover:bg-[#00f5d4]/80 text-black w-full">Book New Session</Button>
                  <Button variant="outline" className="border-[#2a3a5a] text-gray-300 hover:bg-[#2a3a5a] w-full">
                    View All Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Tabs defaultValue="plans" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-[#1a2942] border border-[#2a3a5a]">
              <TabsTrigger value="plans" className="data-[state=active]:bg-[#6c5ce7] data-[state=active]:text-white">
                <FileText className="h-4 w-4 mr-2" />
                Business Plans
              </TabsTrigger>
              <TabsTrigger value="funding" className="data-[state=active]:bg-[#6c5ce7] data-[state=active]:text-white">
                <DollarSign className="h-4 w-4 mr-2" />
                Funding Opportunities
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="data-[state=active]:bg-[#6c5ce7] data-[state=active]:text-white"
              >
                <Video className="h-4 w-4 mr-2" />
                Learning Resources
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="plans" className="mt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card className="bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border-[#2a3a5a] text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-[#00f5d4]" />
                    Saved Business Plans
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Continue working on your business documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {businessPlans.map((plan) => (
                      <div
                        key={plan.id}
                        className="bg-[#0d1b2a] rounded-lg p-4 border border-[#2a3a5a] hover:border-[#6c5ce7] transition-colors"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-white">{plan.name}</h4>
                          <span className="text-sm text-gray-400">{plan.progress}% Complete</span>
                        </div>
                        <Progress
                          value={plan.progress}
                          className="h-1.5 bg-[#2a3a5a]"
                          indicatorColor="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7]"
                        />
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs text-gray-400">
                            Last edited:{" "}
                            {new Date(plan.lastEdited).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <Button
                            variant="ghost"
                            className="h-8 px-2 text-[#00f5d4] hover:text-[#00f5d4]/80 hover:bg-[#2a3a5a]"
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button className="bg-[#00f5d4] hover:bg-[#00f5d4]/80 text-black">Create New Plan</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="funding" className="mt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card className="bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border-[#2a3a5a] text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-[#00f5d4]" />
                    Recommended Funding Opportunities
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Personalized matches based on your startup profile
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fundingRecommendations.map((funding) => (
                      <div
                        key={funding.id}
                        className="bg-[#0d1b2a] rounded-lg p-4 border border-[#2a3a5a] hover:border-[#6c5ce7] transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium text-white">{funding.name}</h4>
                            <div className="flex items-center mt-1">
                              <span className="text-xs bg-[#2a3a5a] text-gray-300 px-2 py-0.5 rounded mr-2">
                                {funding.type}
                              </span>
                              <span className="text-xs text-gray-400">Focus: {funding.focus}</span>
                            </div>
                          </div>
                          <div className="bg-[#1a2942] rounded-full px-2 py-1 text-xs font-medium">
                            <span className={funding.match >= 90 ? "text-[#00f5d4]" : "text-[#6c5ce7]"}>
                              {funding.match}% Match
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-3">
                          <span className="text-xs text-gray-400">
                            Deadline:{" "}
                            {new Date(funding.deadline).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <Button
                            variant="ghost"
                            className="h-8 px-2 text-[#00f5d4] hover:text-[#00f5d4]/80 hover:bg-[#2a3a5a]"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button className="bg-[#6c5ce7] hover:bg-[#6c5ce7]/80 text-white">View All Opportunities</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="resources" className="mt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card className="bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border-[#2a3a5a] text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Video className="h-5 w-5 mr-2 text-[#00f5d4]" />
                    Recommended Learning Resources
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Curated content based on your current startup stage
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#0d1b2a] rounded-lg overflow-hidden border border-[#2a3a5a] hover:border-[#6c5ce7] transition-colors">
                      <div className="relative h-36">
                        <img
                          src="/placeholder.svg?height=150&width=300"
                          alt="Business Model Canvas"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-[#6c5ce7] text-white text-xs font-medium px-2 py-1 rounded">
                          Workshop
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-white mb-1">Business Model Canvas Workshop</h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Learn how to create and iterate on your business model with expert guidance.
                        </p>
                        <Button variant="outline" className="w-full border-[#2a3a5a] text-[#00f5d4] hover:bg-[#2a3a5a]">
                          Watch Now
                        </Button>
                      </div>
                    </div>

                    <div className="bg-[#0d1b2a] rounded-lg overflow-hidden border border-[#2a3a5a] hover:border-[#6c5ce7] transition-colors">
                      <div className="relative h-36">
                        <img
                          src="/placeholder.svg?height=150&width=300"
                          alt="Pitch Deck Masterclass"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-[#00f5d4] text-black text-xs font-medium px-2 py-1 rounded">
                          Masterclass
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-white mb-1">Pitch Deck Masterclass</h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Create a compelling pitch deck that captures investor attention and secures funding.
                        </p>
                        <Button variant="outline" className="w-full border-[#2a3a5a] text-[#00f5d4] hover:bg-[#2a3a5a]">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="bg-[#6c5ce7] hover:bg-[#6c5ce7]/80 text-white">Browse All Resources</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

