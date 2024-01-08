import Hero from "@/sections/hero";
import ScrollUp from "@/components/ui/scroll-up";
import Projects from "@/sections/projects";
import Certificates from "@/sections/certificates";
import Badges from "@/sections/badges";
import Blog from "@/sections/blog";
import Volunteering from "@/sections/volunteering";
import { getHero } from "@/fetch-content/getHero";
import { getAbout } from "@/fetch-content/getAbout";
import { getVolunteering } from "@/fetch-content/getVolunteering";
import { getBlog } from "@/fetch-content/getBlog";
import { getSocials } from "@/fetch-content/getSocials";
import About from "@/sections/about";

export const revalidate = 10;

export default async function Home() {
  const heroData = await getHero();
  const aboutData = await getAbout();
  const volunteeringData = await getVolunteering();
  const blogData = await getBlog();
  const socialsData = await getSocials();

  return (
    <main>
      <ScrollUp />
      <Hero heroInfo={heroData} />
      <About aboutParagraph={aboutData} socials={socialsData} />
      <Projects />
      <Certificates />
      <Badges />
      <Blog blog={blogData} />
      <Volunteering volunteering={volunteeringData} />
    </main>
  );
}
