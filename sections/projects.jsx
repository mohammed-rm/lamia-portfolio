import React from "react";
import Image from "next/image";
import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { RxExternalLink } from "react-icons/rx";
import { projectsInfo } from "@/content/projects";
import { menuItems } from "@/content/navbar";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <p className="section-title">{menuItems[3].projects.sectionTitle}</p>
      <div className="flex flex-col space-y-10 mt-44 w-full container mx-auto">
        {projectsInfo.map((project, index) => (
          <div
            key={index}
            className="flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse
                                                       lg:gap-8 items-center justify-evenly p-2"
          >
            <Card className="w-auto rounded-none bg-opacity-80 cards-style">
              <CardBody className="gap-8">
                <p className="text-primary text-xl md:text-2xl font-black">
                  {project.title}
                </p>
                <p className="text-sm md:text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-6 justify-center items-center">
                  <Link isExternal href={project.codeUrl}>
                    <Button
                      className="rounded-none tracking-wide text-medium"
                      color="primary"
                    >
                      Source code
                      <RxExternalLink />
                    </Button>
                  </Link>

                  {project.applicationUrl ? (
                    <Link isExternal href={project.applicationUrl}>
                      <Button
                        className="rounded-none text-primary tracking-wide text-medium"
                        color="secondary"
                        variant="ghost"
                      >
                        Live application
                        <RxExternalLink />
                      </Button>
                    </Link>
                  ) : null}
                </div>
              </CardBody>
            </Card>
            <Card className="max-w-[700px] rounded-none">
              <Image alt="nextui logo" radius="sm" src={project.image} />
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
