import { client } from "@/lib/sanity";

export async function getProjects() {
  const query = `*[_type == "projectsList"]{category,subCategories[]->{title, projects[]->{"title":description, keywords, link}}}`;
  return await client.fetch(query);
}
