"use client";
import React from 'react';
import {experienceInfo} from "@/data/experience";
import Timeline from "@/components/timeline";
import {menuItems} from "@/data/navbar";

const Experience = () => {
    return (<section
        id="experience"
        className="section">
        <p className="section-title">{menuItems[1].experience.sectionTitle}</p>
        <Timeline experienceInfo={experienceInfo}/>
    </section>);
};

export default Experience;
