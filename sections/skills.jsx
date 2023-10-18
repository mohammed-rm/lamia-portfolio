"use client";
import React from 'react';
import {Card, CardBody, CardFooter, CardHeader, Divider, Link} from "@nextui-org/react";
import Image from "next/image";
import heroImage from "../public/hero-image.png"
import SkillCard from "@/components/skill-card";
import {skillsInfo} from "@/data/skills";
import {GiNorthStarShuriken} from "react-icons/gi";

const Skills = () => {
    return (
        <section
            id="skills"
            className="section">
            <p className="section-title">Skills</p>
            <div className="w-full mt-44 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-6 md:space-y-0 p-4 justify-items-center">
                {skillsInfo.map((skill, index) => (
                    <SkillCard key={index} {...skill}/>
                ))}
            </div>
        </section>);
};

export default Skills;
