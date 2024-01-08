import About from "@/sections/about";
import Hero from "@/sections/hero";
import ScrollUp from "@/components/ui/scroll-up";
import Projects from "@/sections/projects";
import Certificates from "@/sections/certificates";
import Badges from "@/sections/badges";
import Blog from "@/sections/blog";
import Volunteering from "@/sections/volunteering";
import { getHero } from "@/fetch-content/getHero";
import { getAbout } from "@/fetch-content/getAbout";

export const revalidate = 10;

export default async function Home() {
  const heroData = await getHero();
  const aboutData = await getAbout();

  return (
    <main>
      <ScrollUp />
      <Hero heroInfo={heroData} />
      <About aboutParagraph={aboutData} />
      <Projects />
      <Certificates />
      <Badges />
      <Blog />
      <Volunteering />
    </main>
  );
}
