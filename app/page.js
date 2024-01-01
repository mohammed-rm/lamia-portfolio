import About from "@/sections/about";
import Hero from "@/sections/hero";
import PageNavbar from "@/components/layout/navbar";
import { Toaster } from "sonner";
import ScrollUp from "@/components/ui/scroll-up";
import Projects from "@/sections/projects";
import Certificates from "@/sections/certificates";
import Badges from "@/sections/badges";
import Blog from "@/sections/blog";
import Volunteering from "@/sections/volunteering";

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
      <Projects />
      <Certificates />
      <Badges />
      <Blog />
      <Volunteering />
    </main>
  );
}
