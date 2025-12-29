import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Amazon Web Services (AWS)",
      role: "UX Designer",
      period: "2022 - Present",
    },
    {
      company: "The Healthcare Transformation Lab (HTL) at Mass General Hospital",
      role: "Lead UX/UI Designer",
      period: "2020 - 2022",
    },
    {
      company: "Trusted Media Brands",
      role: "Senior Digital Designer",
      period: "2019 - 2022",
    },
  ];

  return (
    <section id="experience" className="py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-3">
          <h2 className=" mb-4 text-3xl">Experience</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="text-center">
              <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-colors">
                <h3 className=" mb-2 text-xl">{exp.role}</h3>
                <div className="flex items-center justify-center gap-2 mb-2 text-sm">
                  {/* <Briefcase size={16} /> */}
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  {/* <Calendar size={16} /> */}
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
