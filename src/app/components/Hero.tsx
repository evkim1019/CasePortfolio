import { ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { Metrics } from "./Metrics";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24">
      <div className="max-w-4xl w-full">
        {/* Main Content Wrapper: Stacked vertically, centered items, centered text */}
        <div className="flex flex-col items-center text-center">
          
          {/* <div className="inline-block mb-4 py-1 px-4 glass-chip rounded-full">
            Senior Research & Design Lead at AWS
          </div> */}
          
          <h1 className="text-5xl md:text-6xl font-semibold pb-6 pt-4">
            Design for Impact,
            <br />
            Build for Scale
          </h1>
          
          {/* Added mx-auto to center the paragraph block since it has a max-width */}
          <p className="mb-2 px-6 max-w-xl text-lg mx-auto">
            A Senior Product Designer who builds. I combine deep UX strategy with full-stack engineering reality. By validating technical feasibility early, I bridge the gap between design and dev to ship scalable, pixel-perfect products without the translation errors.
          </p>
          <p className="mb-8 px-6 max-w-xl text-lg mx-auto">
            Currently working in Applied AI Solutions at AWS in Boston, MA.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://www.linkedin.com/in/evee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-icon rounded-full transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/evkim1019"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-icon rounded-full transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="/files/EVCV.pdf"
              target="_blank"
              className="px-6 py-3 glass-button rounded-full transition-colors flex items-center gap-2"
            >
              View Resume
              <ArrowRight size={20} />
            </a>
          </div>
          
          <Metrics />
          

        </div>
      </div>
    </section>
  );
}
