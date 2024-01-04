import About from "@/sections/about";
import Hero from "@/sections/hero";
import ScrollUp from "@/components/ui/scroll-up";
import Projects from "@/sections/projects";
import Certificates from "@/sections/certificates";
import Badges from "@/sections/badges";
import Blog from "@/sections/blog";
import Volunteering from "@/sections/volunteering";

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Badges />
      <Blog />
      <Volunteering />
    </main>
  );
}
