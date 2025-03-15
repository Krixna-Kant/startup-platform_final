import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a192f] border-t border-[#2a3a5a] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
                StartupAI
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              AI-powered guidance for every stage of your startup journey. Validate ideas, connect with mentors, and
              secure funding.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/validator" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                  AI Business Validator
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                  Find a Mentor
                </Link>
              </li>
              <li>
                <Link href="/funding" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                  Funding Opportunities
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                  Startup Roadmap
                </Link>
              </li>
              <li>
                <Link href="/qa" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                  Q&A Platform
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-[#00f5d4] transition-colors">
                  Startup News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#00f5d4] mr-3 mt-0.5" />
                <span className="text-gray-400">
                  123 Innovation Street
                  <br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#00f5d4] mr-3" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#00f5d4] mr-3" />
                <span className="text-gray-400">hello@startupai.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Get the latest startup news, tips, and resources delivered to your inbox.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-[#1a2942] border-[#2a3a5a] focus:border-[#00f5d4] focus:ring-1 focus:ring-[#00f5d4] text-white"
              />
              <Button className="w-full bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-black font-medium hover:shadow-lg hover:shadow-[#00f5d4]/20 transition-all">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a3a5a] pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Powered by AI & ML | Copyright © {currentYear} StartupAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

