import About from "@/sections/about";
import Experience from "@/sections/experience";
import Skills from "@/sections/skills";
import Contact from "@/sections/contact";
import Projects from "@/sections/projects";
import Hero from "@/sections/hero";
import PageNavbar from "@/components/navbar";

export default function Home() {
  return (
    <main
      className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar
        scrollbar-track-gray-400/20 scrollbar-thumb-primary bg-[#f5fdf2]"
    >
      <PageNavbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
