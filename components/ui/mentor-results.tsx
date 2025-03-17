export function MentorResults({ mentors }: { mentors: { name: string; expertise: string; location: string }[] }) {
    return (
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-[#0d1b2a] rounded-xl border border-[#2a3a5a]">
        <h3 className="text-2xl font-semibold text-white mb-4">Mentors Found</h3>
        <ul className="space-y-4">
          {mentors.map((mentor, index) => (
            <li key={index} className="bg-[#1a2942] p-4 rounded-lg border border-[#2a3a5a] text-white">
              <h4 className="text-lg font-bold">{mentor.name}</h4>
              <p className="text-gray-300">{mentor.expertise} | {mentor.location}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  