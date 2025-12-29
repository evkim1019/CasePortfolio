import { Header } from "./Header";
import { Hero } from "./Hero";
import { About } from "./About";
import { Carousel } from "./Carousel";
import { Metrics } from "./Metrics";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

export function Navigation() {
  return (
    <div className="min-h-screen glass-page ">
      <Header />
      <main className="space-y-12 md:space-y-16">
        <Hero />
        
        {/* <Metrics /> */}
        {/* <About /> */}
        <Projects />
        
        {/* <Experience /> */}
        {/* <Carousel /> */}
      </main>
      <Footer />
    </div>
  );
}
