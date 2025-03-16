"use client";

interface Evaluation {
  [key: string]: string | number; // Adjust the type according to your data structure
}

export function EvaluationResults({ evaluation }: { evaluation: Evaluation }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">AI Evaluation Results</h3>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(evaluation).map(([key, value]) => (
          <div key={key} className="p-3 bg-[#1a2942] text-white rounded-lg">
            <p className="text-sm uppercase text-gray-400">{key.replace(/([A-Z])/g, " $1")}</p>
            <p className="text-lg font-bold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
