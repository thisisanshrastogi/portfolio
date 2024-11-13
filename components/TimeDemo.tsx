import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Hero from "./Hero";
import { BentoGridSecondDemo } from "./Projects";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: <Hero />,
    },
    {
      title: "2023",
      content: (
        <div className="Projects" id="projects">
          <h1 className="block w-full text-center text-7xl  tracking-wide my-5 mb-10">
            Projects
          </h1>
          <BentoGridSecondDemo />
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
