"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function BusinessValidatorForm({ setEvaluation }) {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    // Simulate AI response (backend will replace this later)
    setTimeout(() => {
      setEvaluation({
        feasibility: "High",
        marketDemand: "Moderate",
        competition: "High",
        uniqueness: "Very High",
        scalability: "Moderate",
        fundingProbability: "Low",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-white text-lg">Enter Your Startup Idea</label>
      <Textarea
        placeholder="Describe your startup idea in detail..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        className="bg-[#0d1b2a] text-white border-[#2a3a5a] focus:border-[#00f5d4] focus:ring-[#00f5d4]"
      />

      <Button 
        type="submit"
        disabled={!idea.trim() || loading}
        className="bg-[#00f5d4] hover:bg-[#00f5d4]/80 text-black flex items-center space-x-2"
      >
        {loading ? "Analyzing..." : "Validate Idea"}
        <Send className="h-5 w-5 ml-2" />
      </Button>
    </form>
  );
}
