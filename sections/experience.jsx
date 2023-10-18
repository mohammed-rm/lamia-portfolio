"use client";
import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import {AiOutlineSmallDash} from "react-icons/ai";
import {Card, CardBody} from "@nextui-org/react";
import {GiMoebiusTriangle} from "react-icons/gi";

const experiences = [{
    date: '2020/09', role: 'Internship'
}, {
    date: '2021/07', role: 'Software Engineer'
}, {
    date: '2023/10', role: 'Full Stack'
}];

const Experience = () => {
    return (<section
        id="experience"
        className="section">
        <p className="section-title">Experience</p>

        <div className="flex flex-col justify-center items-center relative w-full mt-44 border-2">

            <div className="absolute left-1/2 border-2 h-full border-[#F7AB0A]"></div>

            <div className="relative transform translate-x-1/2">
                <GiMoebiusTriangle
                    className="absolute w-10 h-10 text-[#F7AB0A] z-20 top-1/2 transform -translate-y-1/2 -left-0.5 rotate-105"/>
                <AiOutlineSmallDash
                    className="absolute w-16 h-14 text-[#F7AB0A] top-1/2 transform -translate-y-1/2 left-8"/>
                <Card className="rounded-bl-none max-w-[400px] h-fit ml-20">
                    <CardBody>
                        <p className="text-sm text-[#F7AB0A] mb-4">12 May, 2021</p>
                        <p className="text-2xl font-bold mb-6">Software Guy</p>
                        <ul className="list-disc ml-4">
                            <li>Make beautiful websites regardless of your design experience.</li>
                            <li>Make beautiful websites regardless of your design experience.</li>
                        </ul>
                    </CardBody>
                </Card>
            </div>

            <div className="relative transform -translate-x-1/2">
                <GiMoebiusTriangle
                    className="absolute w-10 h-10 text-[#F7AB0A] z-20 top-1/2 transform -translate-y-1/2 -right-[9px] rotate-45"/>
                <AiOutlineSmallDash
                    className="absolute w-16 h-14 text-[#F7AB0A] top-1/2 transform -translate-y-1/2 right-8"/>
                <Card className="rounded-br-none max-w-[400px] h-fit mr-20">
                    <CardBody>
                        <p className="text-sm text-[#F7AB0A] mb-4">12 May, 2021</p>
                        <p className="text-2xl font-bold mb-6">Software Guy</p>
                        <ul className="list-disc ml-4">
                            <li>Make beautiful websites regardless of your design experience.</li>
                            <li>Make beautiful websites regardless of your design experience.</li>
                            <li>Make beautiful websites regardless of your design experience.</li>
                            <li>Make beautiful websites regardless of your design experience.</li>
                        </ul>
                    </CardBody>
                </Card>
            </div>

            <div className="relative transform translate-x-1/2">
                <GiMoebiusTriangle
                    className="absolute w-10 h-10 text-[#F7AB0A] z-20 top-1/2 transform -translate-y-1/2 -left-0.5 rotate-105"/>
                <AiOutlineSmallDash
                    className="absolute w-16 h-14 text-[#F7AB0A] top-1/2 transform -translate-y-1/2 left-8"/>
                <Card className="rounded-none max-w-[400px] h-fit ml-20">
                    <CardBody>
                        <p className="text-sm text-[#F7AB0A] mb-4">12 May, 2021</p>
                        <p className="text-2xl font-bold mb-6">Software Guy</p>
                        <ul className="list-disc ml-4">
                            <li>Make beautiful websites regardless of your design experience.</li>
                            <li>Make beautiful websites regardless of your design experience.</li>
                        </ul>
                    </CardBody>
                </Card>
            </div>

            <div className="relative transform -translate-x-1/2">
                <GiMoebiusTriangle
                    className="absolute w-10 h-10 text-[#F7AB0A] z-20 top-1/2 transform -translate-y-1/2 -right-[9px] rotate-45"/>
                <AiOutlineSmallDash
                    className="absolute w-16 h-14 text-[#F7AB0A] top-1/2 transform -translate-y-1/2 right-8"/>
                <Card className="rounded-none max-w-[400px] h-fit mr-20">
                    <CardBody>
                        <p className="text-sm text-[#F7AB0A] mb-4">12 May, 2021</p>
                        <p className="text-2xl font-bold mb-6">Software Guy</p>
                        <ul className="list-disc ml-4">
                            <li>Make beautiful websites regardless of your design experience.</li>
                            <li>Make beautiful websites regardless of your design experience.</li>
                            <li>Make beautiful websites regardless of your design experience.</li>
                            <li>Make beautiful websites regardless of your design experience.</li>
                        </ul>
                    </CardBody>
                </Card>
            </div>

        </div>


    </section>);
};

export default Experience;
