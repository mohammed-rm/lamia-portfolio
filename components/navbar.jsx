"use client";
import React, { useState } from "react";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";

import Image from "next/image";
import logo from "public/logo.png";
import { menuItems } from "@/content/navbar";

const PageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [sectionItem, setSectionItem] = useState("");

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/*Mobile*/}
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => {
          const itemKey = Object.keys(item)[0];
          const title = Object.values(item)[0].navbarTitle;
          return (
            <NavbarMenuItem key={index} className="font-serif">
              <Link
                className="w-full text-xl"
                color={itemKey === sectionItem ? "secondary" : "foreground"}
                href={`#${itemKey}`}
                size="lg"
                onClick={() => {
                  setIsMenuOpen(false);
                  setSectionItem(itemKey);
                }}
              >
                {title}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>

      {/*Desktop */}
      <NavbarBrand>
        <Image
          src={logo}
          className="pt-3 w-36 h-36 hidden md:flex"
          alt="Logo image"
        />
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        {menuItems.map((item, index) => {
          const itemKey = Object.keys(item)[0];
          const title = Object.values(item)[0].navbarTitle;
          return (
            <NavbarItem key={index}>
              <Link
                className="font-serif text-xl"
                href={`#${itemKey}`}
                onClick={() => setSectionItem(itemKey)}
                color={itemKey === sectionItem ? "secondary" : "foreground"}
              >
                {title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#contact"
            variant="flat"
            className="uppercase lg:hidden rounded-none"
          >
            Get in touch
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default PageNavbar;
