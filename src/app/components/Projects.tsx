import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function Projects() {
  const projects = [
    {
      title: "Agentic AI Customization and Lifecycle Optimization",
      category: "UX Research & Design",
      description:
        "Simplify complex AI Agent configuration for the non-technical users and created a health and analysis dashboard to create sustainable lifecycle.",
      image:
        "/src/imgs/caseStudy1/caseStudyOne.png",
      slug: "casestudy1",
      external: null,
      metrics: ["85%+ faster time-to-value", "Eliminated 3rd-party dependency", "3x/mo increased usage", "zero onboarding drop-offs"],
      cta: "View Case Study",
    },
    {
      title: "Data Visualization and Analysis for Human-AI Collaboration",
      category: "Data analysis & Visualization",
      description:
        "Built comprehensive design system from scratch, establishing design principles, component library, and governance model.",
      image:
        "/src/imgs/caseStudy2/caseStudyTwo.png",
      slug: "casestudy2",
      external: null,
      metrics: ["12+ enterprises adoptions", "90% time reduction", "6+ automated computational recipes", "Streamlined drug discovery collaborations"],
      cta: "View Case Study",
    },
    {
      title: "Advanced Cardiac Life Support (ACLS) Mobile App for Healthcare Professionals",
      category: "Product Design Lead",
      description:
        "Designed intuitive mobile experience with American Heart Association (AHA) for healthcare professionals to perform Advanced Cardiac Life Support (ACLS) protocols and summary report for EHR systems.",
      image:
        "/src/imgs/caseStudy3/caseStudyThree.png",
      slug: "casestudy3",
      external: null,
      metrics: ["90%+ conversion rate", "3M+ downloads"],
      cta: "View Case Study",
    },
    {
      title: "Ongoing Digital Revenue Stream Based On Static Textbook Content",
      category: "Product Design & Development",
      description:
        "Designed and developed a pain control practice reference, utilities and educational mobile application for Emergency Medicine Residents with EMRA (Emergency Medicine Residents' Association).",
      image:
        "/src/imgs/caseStudy4/caseStudyFour.png",
      slug: null,
      external: "https://apps.apple.com/us/app/emra-ra/id6451369561",
      metrics: ["Monetizing Textbook IP", "Created ongoing digital revenue stream", "Nation-wide adoption"],
      cta: "View in AppStore",
    },
    {
      title: "Clinical Protocols, Content, and Resources for Healthcare Professionals",
      category: "Strategy & Design systems",
      description:
        "Designed digital health solution to assist clinicians in running codes and delivering bedside Pediatric Advanced Life Support (PALS) care with actual patients.",
      image:
        "/src/imgs/caseStudy5/caseStudyFive.png",
      slug: null,
      external: "https://cpr.heart.org/en/cpr-courses-and-kits/healthcare-professional/pediatric/aha-pals-app",
      metrics: ["4+ rating in AppStore", "Strategic product alignment"],
      cta: "View in AppStore",
    },
  ];

  return (
    <section id="projects" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h2 className="text-3xl"> Projects</h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.slug !== null ? `/${project.slug}` : project.external}
              
              onClick={project.slug !== null ? () => window.scrollTo(0, 0) : undefined}
              target={project.slug === null ? "_blank" : "_self"}
              className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-all border border-white/10 shadow-xl group"
            >
              <div className="relative h-40 overflow-hidden bg-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 glass-chip px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", color: "#333" }}>
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className=" mb-3 text-xl">{project.title}</h3>
                <p className=" mb-4">{project.description}</p>
                <div className="space-y-2 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 ">
                      <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2  hover:gap-3 transition-all group/btn">
                  {project.cta}
                  {project.external !== null ? <ExternalLink size={16}className="group-hover/btn:translate-x-1 transition-transform" /> : <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
