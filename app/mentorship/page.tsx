"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/navbar";

export default function MentorshipPage() {
  const [formData, setFormData] = useState({
    city: "",
    country: "",
    targetCountry: "",
    businessSector: "",
    startupStage: "",
  });

  const [mentors, setMentors] = useState<string[]>([]);

  const staticMentors = [
    { name: "John Doe", expertise: "Fintech", location: "USA" },
    { name: "Jane Smith", expertise: "AI & ML", location: "India" },
    { name: "Carlos Gómez", expertise: "E-commerce", location: "Spain" },
    { name: "Emily White", expertise: "SaaS", location: "UK" },
    { name: "Akira Tanaka", expertise: "Blockchain", location: "Japan" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    // Filtering mentors based on sector (for simplicity, using static data)
    const filteredMentors = staticMentors
      .filter((mentor) =>
        formData.businessSector
          ? mentor.expertise.toLowerCase().includes(formData.businessSector.toLowerCase())
          : true
      )
      .map((mentor) => `${mentor.name} - ${mentor.expertise} (${mentor.location})`);

    setMentors(filteredMentors);
  };

  return (
    <>
      <Navbar />
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0d1b2a] to-[#0a192f] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Find Your Mentor
          </motion.h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
            Get guidance from experienced mentors based on your startup sector and goals.
          </p>

          <div className="max-w-3xl mx-auto bg-[#1a2942]/80 p-6 rounded-xl shadow-lg border border-[#2a3a5a]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="city"
                placeholder="Your City"
                value={formData.city}
                onChange={handleChange}
                className="bg-[#0d1b2a] text-white border-[#2a3a5a] focus:border-[#00f5d4]"
              />
              <Input
                type="text"
                name="country"
                placeholder="Your Country"
                value={formData.country}
                onChange={handleChange}
                className="bg-[#0d1b2a] text-white border-[#2a3a5a] focus:border-[#00f5d4]"
              />
              <Input
                type="text"
                name="targetCountry"
                placeholder="Target Country"
                value={formData.targetCountry}
                onChange={handleChange}
                className="bg-[#0d1b2a] text-white border-[#2a3a5a] focus:border-[#00f5d4]"
              />
              <Input
                type="text"
                name="businessSector"
                placeholder="Business Sector (e.g., AI, Fintech)"
                value={formData.businessSector}
                onChange={handleChange}
                className="bg-[#0d1b2a] text-white border-[#2a3a5a] focus:border-[#00f5d4]"
              />
              <Input
                type="text"
                name="startupStage"
                placeholder="Startup Stage (Idea, MVP, Growth)"
                value={formData.startupStage}
                onChange={handleChange}
                className="bg-[#0d1b2a] text-white border-[#2a3a5a] focus:border-[#00f5d4]"
              />
            </div>

            <Button
              onClick={handleSearch}
              className="mt-4 w-full bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-black font-medium hover:shadow-lg"
            >
              Find Mentors
            </Button>
          </div>

          {mentors.length > 0 && (
            <motion.div
              className="max-w-3xl mx-auto mt-8 p-6 bg-[#0d1b2a] rounded-xl border border-[#2a3a5a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Available Mentors</h3>
              <ul className="text-gray-300 space-y-2">
                {mentors.map((mentor, index) => (
                  <li key={index} className="p-2 bg-[#1a2942] rounded-md">
                    {mentor}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
