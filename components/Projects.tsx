"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bentogrid";
import Image from "next/image";

import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";

import { SiExpress, SiFlask, SiPostgresql, SiWebrtc } from "react-icons/si";

import mediapipeIcon from "@/public/mediapipe.svg";
import jwticon from "@/public/jwticon.svg";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

const mediapipe = () => {
  return <Image src={mediapipeIcon} alt="icon" width={30} height={30} />;
};

const jwt = () => {
  return <Image src={jwticon} alt="icon" width={30} height={30} />;
};

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-[70vw] mx-auto auto-rows-auto md:auto-rows-[22rem]  relative  z-[20] card">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          className={item.className}
          icons={item.icons}
          content={item.content}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image src={mediapipeIcon} alt="icon" />
  </div>
);

const items = [
  {
    title: "Taxi Buddy",
    description:
      "A taxi pooling application that connects people , travelling to same destination.",

    image: "/taxiHome.png",
    className: "col-span-1 md:col-span-3 ",
    icons: [
      {
        logo: <FaReact />,
        name: "ReactJS",
      },
      {
        logo: <SiExpress />,
        name: "Express",
      },
      {
        logo: <FaNodeJs />,
        name: "NodeJs",
      },
      {
        logo: <RiTailwindCssFill />,
        name: "TailwindCSS",
      },
      {
        logo: <SiPostgresql />,
        name: "Postgresql",
      },
      {
        logo: jwt(),
        name: "JWT",
      },
    ],
    content:
      "Open Source Taxi pooling application that connects people travelling to same destination.",
    link: "https://github.com/orgs/TheDumbProject/repositories",
  },
  {
    title: "Git-Game",
    description: "An Interactive way to test your git skills.",
    image: "/gitgame.png",
    className: "col-span-1 md:col-span-2",
    icons: [
      {
        logo: <RiNextjsLine className="text-4xl" />,
        name: "NextJS",
      },
      {
        logo: <FaGithub className="text-4xl" />,
        name: "Github",
      },
      {
        logo: <FaGitAlt className="text-4xl" />,
        name: "Git",
      },
      {
        logo: <RiTailwindCssFill className="text-4xl" />,
        name: "TailwindCSS",
      },
    ],
    link: "https://github.com/gdg-iiitk/git-game",
    content:
      "An interactive game where you do git operations to solve the levels and learn git in a fun way.",
  },
  {
    title: "Portfolio",
    description:
      "This portfolio website built using nextjs , framer-motion and aceternity",
    header: <Skeleton />,
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "SignWave",
    description:
      "A Video Calling app with real-time sign language translation.",
    image: "/signwave.png",
    icons: [
      {
        logo: <FaReact />,
        name: "ReactJS",
      },
      {
        logo: <SiWebrtc />,
        name: "WebRTC",
      },
      {
        logo: <SiFlask />,
        name: "Flask",
      },
      {
        logo: <RiTailwindCssFill />,
        name: "TailwindCSS",
      },
      {
        logo: mediapipe(),
        name: "Mediapipe",
      },
    ],
    link: "https://github.com/thisisanshrastogi/signwave_frontend",
    content:
      "A WebRTC based video calling app that supports ASL gesture recognition . Looking forward to develop and integrate an ASL model that can recognize a larger vocabulary along with contexts",
    className: "col-span-1 md:col-span-3 ",
  },
];
