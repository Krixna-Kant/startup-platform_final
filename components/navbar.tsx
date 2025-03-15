"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "AI Business Validator", href: "/validator" },
    { name: "Mentorship", href: "/mentorship" },
    { name: "Funding", href: "/funding" },
    { name: "Startup Roadmap", href: "/roadmap" },
    { name: "Q&A", href: "/qa" },
    { name: "Trending News", href: "/news" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a192f]/80 border-b border-[#2a3a5a]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
              StartupAI
            </span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white hover:text-[#00f5d4] transition-colors" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-1 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#00f5d4] transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f5d4] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-9 bg-[#1a2942] border-[#2a3a5a] focus:border-[#00f5d4] focus:ring-1 focus:ring-[#00f5d4] text-white"
              />
            </div>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border-2 border-[#00f5d4] hover:border-[#6c5ce7] transition-colors">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                      <AvatarFallback className="bg-[#1a2942]">UN</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-[#1a2942] border-[#2a3a5a] text-white">
                  <DropdownMenuItem className="hover:bg-[#2a3a5a]">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#2a3a5a]">Dashboard</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#2a3a5a]">Settings</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-[#2a3a5a]" onClick={toggleLogin}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={toggleLogin}
                className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-black font-medium hover:shadow-lg hover:shadow-[#00f5d4]/20 transition-all"
              >
                Login
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col space-y-2 pt-3 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-[#00f5d4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="relative mt-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-9 bg-[#1a2942] border-[#2a3a5a] focus:border-[#00f5d4] text-white"
              />
            </div>
            {!isLoggedIn && (
              <Button
                onClick={toggleLogin}
                className="mt-2 w-full bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-black font-medium"
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

