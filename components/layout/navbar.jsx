"use client";
import React from "react";
import {
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
import logo from "@/public/logo.png";
import { menuItems } from "@/content/navbar";
import { ContactForm } from "@/components/contact/contact-form";
import { useActiveSectionContext } from "@/context/active-section-context";

const PageNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="border-b-2 border-accent"
      maxWidth="xl"
    >
      {/* Mobile Navbar Content */}
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu Items */}
      <NavbarContent className="lg:hidden">
        <NavbarMenu>
          <>
            {Object.keys(menuItems).map((key, index) => {
              const itemKey = key;
              const title = menuItems[key].navbarTitle;
              return (
                <NavbarMenuItem key={index} className="font-playpen">
                  <Link
                    className={`w-full text-xl ${
                      itemKey === activeSection
                        ? "text-primary font-semibold"
                        : "text-default"
                    }`}
                    href={`#${itemKey}`}
                    size="lg"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveSection(itemKey);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {title}
                  </Link>
                </NavbarMenuItem>
              );
            })}
          </>
        </NavbarMenu>
      </NavbarContent>

      {/* Desktop Navbar Brand */}
      <NavbarBrand>
        <Image
          src={logo}
          className="pt-3 w-36 h-36 hidden lg:flex"
          alt="Logo of the website"
        />
      </NavbarBrand>

      {/* Desktop Menu Items */}
      <NavbarContent className="hidden lg:flex gap-8" justify="center">
        <>
          {Object.keys(menuItems).map((key, index) => {
            const itemKey = key;
            const title = menuItems[key].navbarTitle;
            return (
              <NavbarItem key={index}>
                <Link
                  className={`text-large relative group ${
                    itemKey === activeSection
                      ? "text-primary font-semibold"
                      : "text-default"
                  }`}
                  href={`#${itemKey}`}
                  onClick={() => {
                    setActiveSection(itemKey);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <span>{title}</span>
                  {/* Underline effect on hover */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-100 group-hover:w-full" />
                </Link>
              </NavbarItem>
            );
          })}
        </>
      </NavbarContent>

      {/* CTA Button */}
      <NavbarContent justify="end">
        <NavbarItem>
          <ContactForm />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default PageNavbar;
