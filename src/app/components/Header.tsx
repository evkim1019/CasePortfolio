import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const scroll = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 100);
    } else {
      scroll();
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 glass-surface border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection("hero")}>
            <span className=" tracking-tight">Evee Kim</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            
            <a
              href="/files/EVCV.pdf"
              target="_blank"
              className="glass-button px-6 py-2 rounded-full  transition-colors"
            >
              View Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            
            <a
              href="/files/EVCV.pdf"
              target="_blank"
              className="px-6 py-2 glass-button  rounded-full transition-colors w-fit"
            >
              View Resume
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
