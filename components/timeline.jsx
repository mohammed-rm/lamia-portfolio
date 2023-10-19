import React from 'react';
import {Card, CardBody, Divider} from "@nextui-org/react";
import {GiMoebiusTriangle} from "react-icons/gi";
import {AiOutlineSmallDash} from "react-icons/ai";

const Timeline = ({experienceInfo}) => {
    return (<div
            className="flex md:ml-20 lg:ml-0 flex-col space-y-4 lg:space-y-0 lg:justify-center lg:items-center relative
            w-full mt-44 items-start">

            <Divider className="absolute left-1 lg:left-1/2 border-2 w-[2px] h-full bg-[#F7AB0A]"/>

            {experienceInfo.map((experience, index) => <div key={index}
                                                            className="relative transform-none lg:transform translate-x-1/2 lg:odd:-translate-x-1/2">
                <GiMoebiusTriangle
                    className={`absolute w-10 h-10 text-[#F7AB0A] z-20 top-7 transform -translate-y-1/2 rotate-105 ml-1 lg:ml-0
                    ${index % 2 !== 0 ? 'lg:-right-[5px] lg:rotate-45' : null}`}/>
                <AiOutlineSmallDash
                    className={`hidden lg:block absolute w-16 h-14 text-[#F7AB0A] top-7 transform -translate-y-1/2
                    ${index % 2 !== 0 ? "lg:right-8" : "lg:left-8"}`}/>
                <AiOutlineSmallDash
                    className={`lg:hidden absolute w-16 h-14 text-[#F7AB0A] top-7 transform -translate-y-1/2 left-8`}/>
                <Card
                    className={`rounded-none max-w-[600px] lg:max-w-[400px] h-fit mr-2 md:mr-0 ml-20 lg:ml-0 
                    ${index % 2 === 0 ? 'lg:ml-20' : 'lg:mr-20'}`}>
                    <CardBody>
                        <p className="text-sm text-[#F7AB0A] mb-4">{experience.date}</p>
                        <p className="text-2xl font-bold mb-6">{experience.role}</p>
                        <ul className="list-disc ml-4">
                            {experience.missions.map((mission, index) => <li key={index}>
                                {mission}
                            </li>)}
                        </ul>
                    </CardBody>
                </Card>
            </div>)}
        </div>);
};

export default Timeline;
