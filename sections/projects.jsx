import React from "react";
import { menuItems } from "@/content/navbar";
import ProjectCategory from "@/components/projects/project-category";
import { projects } from "@/content/projects";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <p className="section-title">{menuItems.projects.navbarTitle}</p>
      <div className="mt-44 w-full container mx-auto md:ml-20 md:mr-20 flex flex-col p-6 gap-8">
        {Object.values(projects).map((project, index) => (
          <ProjectCategory
            key={index}
            title={project.category}
            subCategories={project.subCategories}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
