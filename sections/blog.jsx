import React from "react";
import { menuItems } from "@/content/navbar";
import { blog } from "@/content/blog";
import { Button, Link } from "@nextui-org/react";
import { RxExternalLink } from "react-icons/rx";

const Blog = () => {
  return (
    <section id="blog" className="section">
      <p className="section-title">{menuItems.blog.navbarTitle}</p>
      <div className="flex flex-col items-center gap-y-6 mt-44 w-full container mx-auto md:ml-20 md:mr-20">
        <p className="md:text-center md:text-xl lg:text-2xl tracking-wide">
          {blog.text}
        </p>
        <Link isExternal href={blog.link} className="lg:w-[30%]">
          <Button
            className="rounded-none text-primary tracking-wider text-large w-full hover:bg-accent hover:text-black"
            color="secondary"
            variant="flat"
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
