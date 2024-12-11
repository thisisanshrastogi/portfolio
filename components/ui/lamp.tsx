"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { FlipWords } from "./flip-words";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LampDemo({ title }: { title: string }) {
  return (
    <LampContainer className="z-10  ">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        className=" py-4  text-center text-5xl font-medium tracking-tight  md:text-7xl "
      >
        <FlipWords
          words={["Hello,", "Namaskaram,", "Namaste,", "Hola,", "Bonjour,", ""]}
          className=" mb-14   text-center bg-gradient-to-b from-indigo-300  to-slate-100 bg-clip-text  text-border text-5xl md:text-7xl font-semibold"
        />
        <br></br>

        <div className="text-5xl md:text-7xl font-[500] ">
          I am <span className="block md:inline pt-4">Ansh Rastogi</span>
        </div>
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black-100 w-full rounded-md z-0 ",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-2 items-center justify-center isolate z-0 translate-y-5 md:translate-y-14">
        <motion.div
          initial={{
            opacity: 0.5,
            width: "var(--motion-width-2)",
          }}
          whileInView={{
            opacity: 1,
            width: "var(--motion-width-1)",
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-indigo-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-black-100 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black-100  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0.5,
            width: "var(--motion-width-2)",
          }}
          whileInView={{
            opacity: 1,
            width: "var(--motion-width-1)",
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-indigo-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-black-100  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black-100 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        {/**/}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black-100 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-indigo-500 bg-opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "calc(var(--motion-width-2)/2)" }}
          whileInView={{ width: "calc(var(--motion-width-2)/2)" }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-indigo-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "var(--motion-width-2)" }}
          whileInView={{ width: "var(--motion-width-1)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-indigo-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black-100 "></div>
      </div>

      <div className="relative z-50 flex -translate-y-[100%] md:-translate-y-[90%] flex-col items-center px-5 py-4">
        {children}
      </div>
      <div className=" absolute bottom-3  text-3xl  p-0">
        {/* /* From Uiverse.io by ArturCodeCraft  */}
        <div className="main__action">
          <a className="main__scroll" href="#projects">
            <div className="main__scroll-box h-6">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* <path d="M0 0h24v24H0z" fill="none"></path> */}
                <path
                  d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
                  fill="white"
                ></path>
              </svg>
            </div>

            <span className=" text-transparent ">Scroll</span>
          </a>
        </div>
      </div>
    </div>
  );
};
