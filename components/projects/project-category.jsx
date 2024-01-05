"use client";
import React from "react";
import ProjectCard from "@/components/projects/project-card";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GoDotFill, GoPlus } from "react-icons/go";

const ProjectCategory = ({ title, subCategories }) => {
  return (
    <div className="w-full h-auto relative p-8 flex flex-col space-y-12 bg-gradient-to-br from-transparent via-transparent to-slate-200 rounded-sm rounded-br-[50px]">
      <p className="text-sm md:text-large lg:text-xl ribbon h-auto font-semibold text-purple-800">
        {title}
      </p>
      <Accordion variant="splitted">
        {Object.values(subCategories)?.map((subCategory, index) => (
          <AccordionItem
            className="group-[.is-splitted]:shadow-md group-[.is-splitted]:bg-transparent group-[.is-splitted]:rounded-md mb-6 group-[.is-splitted]:overflow-hidden p-2"
            classNames={{
              title: "text-primary text-sm md:text-large opacity-70",
            }}
            indicator={<GoPlus className="text-secondary h-6 w-6" />}
            title={`${subCategory.title}`}
            key={index}
            aria-label={`${subCategory.title}`}
            startContent={<GoDotFill className="text-primary opacity-60" />}
          >
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {subCategory.projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  keywords={project.keywords}
                  link={project.link}
                />
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProjectCategory;
