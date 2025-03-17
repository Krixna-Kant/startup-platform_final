"use client";

interface Evaluation {
  feasibility: string;
  marketDemand: string;
  competition: string;
  uniqueness: string;
  scalability: string;
  fundingProbability: string;
  analysis: string;
  error?: string;
}

const getColor = (value: string) => {
  switch (value.toLowerCase()) {
    case "low": return "text-red-500";
    case "moderate": return "text-yellow-500";
    case "high": return "text-green-500";
    default: return "text-gray-400";
  }
};

export function EvaluationResults({ evaluation }: { evaluation: Evaluation }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">AI Evaluation Results</h3>
      
      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(evaluation).map(([key, value]) => 
          key !== "analysis" && key !== "error" && (
            <div key={key} className="p-3 bg-[#1a2942] text-white rounded-lg">
              <p className="text-sm uppercase text-gray-400">{key.replace(/([A-Z])/g, " $1")}</p>
              <p className={`text-lg font-bold ${getColor(value as string)}`}>
                {value !== "Unknown" ? value : "Processing..."}
              </p>
            </div>
          )
        )}
      </div>

      {/* AI Analysis */}
      {evaluation.analysis && (
        <div className="p-4 bg-[#1a2942] text-white rounded-lg mt-4">
          <h4 className="text-lg font-semibold">AI Analysis</h4>
          <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: evaluation.analysis }} />
        </div>
      )}
    </div>
  );
}
