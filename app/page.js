import About from "@/sections/about";
import Hero from "@/sections/hero";
import ScrollUp from "@/components/ui/scroll-up";
import Projects from "@/sections/projects";
import Certificates from "@/sections/certificates";
import Badges from "@/sections/badges";
import Blog from "@/sections/blog";
import Volunteering from "@/sections/volunteering";
import { getHero } from "@/lib/getHero";

export const revalidate = 10;

export default async function Home() {
  const heroData = await getHero();
  return (
    <main>
      <ScrollUp />
      <Hero heroInfo={heroData} />
      <About />
      <Projects />
      <Certificates />
      <Badges />
      <Blog />
      <Volunteering />
    </main>
  );
}
