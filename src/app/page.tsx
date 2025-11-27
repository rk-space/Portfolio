import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact-form";
import Footer from "@/components/layout/footer";
import { ScrollAnimator } from "@/components/scroll-animator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ScrollAnimator>
          <About />
        </ScrollAnimator>
        <ScrollAnimator>
          <Skills />
        </ScrollAnimator>
        <ScrollAnimator>
          <Education />
        </ScrollAnimator>
        <ScrollAnimator>
          <Projects />
        </ScrollAnimator>
        <ScrollAnimator>
          <Contact />
        </ScrollAnimator>
      </main>
      <Footer />
    </div>
  );
}
