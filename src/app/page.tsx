import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import ResumeTimeline from "@/components/sections/resume-timeline";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import GithubActivity from "@/components/sections/github-activity";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/layout/footer";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center">
        <Hero />
        <About />
        <Separator />
        <ResumeTimeline />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <GithubActivity />
        <Separator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
