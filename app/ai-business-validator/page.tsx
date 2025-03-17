"use client";

import { useState } from "react";
import { BusinessValidatorForm } from "@/components/BusinessValidatorForm";
import { EvaluationResults } from "@/components/ui/EvaluationResults";
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";

export default function BusinessValidatorPage() {
  const [evaluation, setEvaluation] = useState(null);

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
            AI Business Validator
          </motion.h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
            Validate your startup idea based on market trends, competition, feasibility, and funding probability.
          </p>

          <div className="max-w-3xl mx-auto bg-[#1a2942]/80 p-6 rounded-xl shadow-lg border border-[#2a3a5a]">
            <BusinessValidatorForm setEvaluation={setEvaluation} />
          </div>

          {evaluation && (
            <motion.div 
              className="max-w-3xl mx-auto mt-8 p-6 bg-[#0d1b2a] rounded-xl border border-[#2a3a5a]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EvaluationResults evaluation={evaluation} />
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
