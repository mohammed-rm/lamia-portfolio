"use client";
import React from 'react';
import {experienceInfo} from "@/data/experience";
import Timeline from "@/components/timeline";

const Experience = () => {
    return (<section
        id="experience"
        className="section">
        <p className="section-title">Experience</p>
        <Timeline experienceInfo={experienceInfo}/>
    </section>);
};

export default Experience;
