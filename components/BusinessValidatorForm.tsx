"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";

interface BusinessValidatorFormProps {
  setEvaluation: (evaluation: any) => void;
}

export function BusinessValidatorForm({ setEvaluation }: BusinessValidatorFormProps) {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  const extractMetric = (metric: string, text: string) => {
    const match = new RegExp(`${metric}[:\\s]*(Low|Moderate|High)`, "i").exec(text);
    return match ? match[1] : "Unknown";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (!apiKey) throw new Error("Missing Gemini API key");

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ 
              parts: [{ 
                text: `Analyze this business idea: "${idea}" and provide:
                - Feasibility: (Low, Moderate, High)
                - Market Demand: (Low, Moderate, High)
                - Competition: (Low, Moderate, High)
                - Uniqueness: (Low, Moderate, High)
                - Scalability: (Low, Moderate, High)
                - Funding Probability: (Low, Moderate, High)
                - Detailed Analysis (in 2-3 paragraphs).`
              }]
            }],
          }),
        }
      );

      if (!response.ok) throw new Error("API request failed");

      const data = await response.json();
      
      if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        const aiText = data.candidates[0].content.parts[0].text;

        setEvaluation({
          feasibility: extractMetric("Feasibility", aiText),
          marketDemand: extractMetric("Market Demand", aiText),
          competition: extractMetric("Competition", aiText),
          uniqueness: extractMetric("Uniqueness", aiText),
          scalability: extractMetric("Scalability", aiText),
          fundingProbability: extractMetric("Funding Probability", aiText),
          analysis: aiText.replace(/\n/g, "<br />"), // Formatting AI response
        });
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMessage = error instanceof Error ? error.message : "AI analysis failed. Try again.";
      setEvaluation({ error: errorMessage });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-white text-lg">Enter Your Startup Idea</label>
      <Textarea
        placeholder="Describe your startup idea in detail..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        className="bg-[#0d1b2a] text-white border-[#2a3a5a] focus:border-[#00f5d4] focus:ring-[#00f5d4]"
        rows={5}
      />
      
      <Button
        type="submit"
        disabled={!idea.trim() || loading}
        className="bg-[#00f5d4] hover:bg-[#00f5d4]/80 text-black flex items-center space-x-2"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Validate Idea"}
        <Send className="h-5 w-5 ml-2" />
      </Button>
    </form>
  );
}
