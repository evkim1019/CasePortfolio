import { Users, Lightbulb, Award, Target } from "lucide-react";

export function About() {
  

  const skills = [
    "User Research & Testing",
    "Design Strategy",
    "Information Architecture",
    "Interaction Design",
    "Design Systems",
    "Prototyping",
    "Usability Testing",
    "Workshop Facilitation",
    "Stakeholder Management",
    "Data Analysis",
    "A/B Testing",
    "Accessibility",
  ];

  return (
    <section id="about" className="px-6">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="glass-chip px-4 py-3 rounded-lg border border-white/10  text-center transition-colors hover:border-white/30"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
