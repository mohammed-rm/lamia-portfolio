import About from "@/sections/about";
import Experience from "@/sections/experience";
import Skills from "@/sections/skills";
import Contact from "@/sections/contact";
import Projects from "@/sections/projects";
import Hero from "@/sections/hero";
import PageNavbar from "@/components/navbar";
import { Toaster } from "sonner";
import ScrollUp from "@/components/scroll-up";

export default function Home() {
  return (
    <main
      className="bg-[#f5fdf2] bg-cover bg-no-repeat overflow-y-scroll overflow-x-hidden lg:scrollbar
        scrollbar-track-gray-400/20 scrollbar-thumb-primary snap-y snap-mandatory h-screen scroll-smooth"
    >
      <Toaster richColors position="top-right" />
      <PageNavbar />
      <ScrollUp />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
