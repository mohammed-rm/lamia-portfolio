"use client";
import React from "react";
import { menuItems } from "@/content/navbar";
import { Button, Link } from "@nextui-org/react";
import { RxExternalLink } from "react-icons/rx";
import { useSectionInView } from "@/hooks/active-section-context";

const Blog = ({ blog }) => {
  const { ref } = useSectionInView(menuItems.blog.id);
  return (
    <section
      id="blog"
      className="section box bg-green-600 bg-opacity-5 mt-10"
      ref={ref}
    >
      <p className="section-title">{menuItems.blog.navbarTitle}</p>
      <div className="flex flex-col items-center gap-y-6 mt-44 w-full container mx-auto md:ml-20 md:mr-20">
        <p className="md:text-center md:text-xl lg:text-2xl tracking-wide">
          {blog.text}
        </p>
        <Link href={blog.link} target={"_blank"}>
          <Button
            className="rounded-[4px] text-primary tracking-wide text-medium mb-10"
            color="primary"
            variant="bordered"
          >
            Continuer la lecture
            <RxExternalLink />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
