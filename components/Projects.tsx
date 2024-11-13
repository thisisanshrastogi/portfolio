import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bentogrid";
import Image from "next/image";
import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { image } from "framer-motion/client";
import { SiExpress, SiFlask, SiPostgresql, SiWebrtc } from "react-icons/si";

import mediapipeIcon from "@/public/mediapipe.svg";
import jwticon from "@/public/jwticon.svg";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { link } from "fs";
const mediapipe = () => {
  return <Image src={mediapipeIcon} alt="icon" width={30} height={30} />;
};

const jwt = () => {
  return <Image src={jwticon} alt="icon" width={30} height={30} />;
};

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-[75%] mx-auto md:auto-rows-[23rem]">
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
    className: "md:col-span-3 ",
    icons: [
      <FaReact />,
      <SiExpress />,
      <FaNodeJs />,
      <RiTailwindCssFill />,
      <SiPostgresql />,
      jwt(),
    ],
    content:
      "Open Source Taxi pooling application that connects people travelling to same destination.",
    link: "https://github.com/orgs/TheDumbProject/repositories",
  },
  {
    title: "Git-Game",
    description: "An Interactive way to test your git skills.",
    image: "/gitgame.png",
    className: "md:col-span-2",
    icons: [
      <RiNextjsLine className="text-4xl" />,
      <FaGithub className="text-4xl" />,
      <FaGitAlt className="text-4xl" />,
      <RiTailwindCssFill className="text-4xl" />,
    ],
    link: "https://github.com/gdg-iiitk/git-game",
    content:
      "An interactive game where you do git operations to solve the levels and learn git in a fun way.",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-2",
  },
  {
    title: "SignWave",
    description:
      "A Video Calling app with real-time sign language translation.",
    image: "/signwave.png",
    icons: [<FaReact />, <SiWebrtc />, <SiFlask />, <RiTailwindCssFill />],
    link: "https://github.com/thisisanshrastogi/signwave_frontend",
    content:
      "A WebRTC based video calling app that supports ASL gesture recognition . Looking forward to develop and integrate an ASL model that can recognize a larger vocabulary along with contexts",
    className: "md:col-span-3 ",
  },
];
