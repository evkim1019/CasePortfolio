import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="pb-6 pt-36 px-6">
      <div className="max-w-7xl mx-auto glass-surface rounded-3xl border border-white/10 shadow-2xl p-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4  text-xl">Evee Kim</h3>
            {/* <p className="">
              Senior UX Designer crafting human-centered AI Agentic experiences.
            </p> */}
            <div className="flex gap-6 py-4">
              <a
                href="https://www.linkedin.com/in/evee"
                target="_blank"
                rel="noopener noreferrer"
                className="block  hover: transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/evkim1019"
                target="_blank"
                rel="noopener noreferrer"
                className="block  hover: transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* <div>
            <h4 className="mb-4 ">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#about"
                className="block  hover: transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="block  hover: transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block  hover: transition-colors"
              >
                Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="block  hover: transition-colors"
              >
                Resume
              </a>
            </div>
          </div> */}

          {/* <div>
            <h4 className="mb-4 ">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block  hover: transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block  hover: transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:alex.morgan@example.com"
                className="block  hover: transition-colors"
              >
                Email
              </a>
            </div>
          </div> */}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2025 Evee Kim. All rights reserved.</p>
          <span className="text-xs">Currently 🦮🏃‍♀️ or 👩🏻‍💻</span>
        </div>
      </div>
    </footer>
  );
}
