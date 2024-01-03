import React from "react";
import ProjectCard from "@/components/projects/project-card";

const ProjectCategory = ({ title, subCategories }) => {
  return (
    <div className="w-full h-auto relative p-8">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-300 opacity-30 rounded-large rounded-br-[100px]" />
      <p className="text-2xl font-playpen">{title}</p>
      <ul className="list-disc">
        {Object.values(subCategories).map((subCategory, index) => (
          <li key={index} className="text-xl font-playpen mt-6 ml-12">
            {subCategory.title}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-6">
              {subCategory.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  keywords={project.keywords}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCategory;
