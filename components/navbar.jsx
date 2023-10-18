"use client"
import React, {useState} from 'react';
import {
    Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle
} from "@nextui-org/react";

const menuItems = [{id: "about", title: "About"}, {id: "experience", title: "Experience"}, {
    id: "skills",
    title: "Skills"
}, {id: "projects", title: "Projects"},];
const PageNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [sectionItem, setSectionItem] = useState();

    return (<Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}>

        {/*Mobile*/}
        <NavbarContent className="md:hidden" justify="start">
            <NavbarMenuToggle/>
        </NavbarContent>

        <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                        className="w-full"
                        color={item.id === sectionItem ? "warning" : "foreground"}
                        href={`#${item.id}`}
                        size="lg"
                        onClick={() => {
                            setIsMenuOpen(false);
                            setSectionItem(item.id);
                        }}
                    >
                        {item.title}
                    </Link>
                </NavbarMenuItem>))}
        </NavbarMenu>

        {/*Desktop */}
        <NavbarBrand>
            <p className="font-bold text-inherit hidden md:flex">LAMIA CHEKKABA</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-8" justify="center">
            {menuItems.map((item, index) => (<NavbarItem
                key={`${item}-${index}`}
                isActive={sectionItem === item.id}
            >
                <Link
                    href={`#${item.id}`}
                    onClick={() => setSectionItem(item.id)}
                >
                    {item.title}
                </Link>
            </NavbarItem>))}
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <Button as={Link} color="primary" href="#contact" variant="flat" className="uppercase lg:hidden">
                    Get in touch
                </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>);
};

export default PageNavbar;
