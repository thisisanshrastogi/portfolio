"use client";
import Hero from "@/components/Hero";
import { BentoGridSecondDemo } from "@/components/Projects";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { motion } from "framer-motion";
import { Connect } from "@/components/connect";

export default function Home() {
  return (
    <main className=" text-white bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full">
      <TracingBeam className="">
        <div className="relative ">
          <Hero />

          <motion.h1
            className="block w-full text-center text-7xl  tracking-wide py-10 my-6 "
            style={{ backgroundColor: "rgb(0, 3, 18)" }}
            id="projects"
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 250,
              damping: 15,
            }}
          >
            Projects
          </motion.h1>
          <div className="gradient-bg ">
            <BentoGridSecondDemo />
          </div>

          {/* <AnimatedModalDemo
          title="Taxi Buddy"
          content="lorem ipsum rendom random"
        /> */}
          {/* About section */}

          <div
            style={{
              position: "relative",
              minHeight: "100vh",
              overflow: "hidden",
            }}
            className="gradient-bg-another py-20  "
          >
            <motion.h1
              className="block w-full text-center text-7xl  tracking-wide py-10 "
              id="about"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              About Me!
            </motion.h1>
            <motion.div
              className="flex items-center justify-center my-5"
              initial={{ scale: 0.7, opacity: 0.2 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 150,
                damping: 15,
              }}
            >
              <div className=" w-[700px] h-[400px] border-[2px] border-white-100/[0.4] rounded-3xl px-6 py-6 bg-white/[0.1]  antialiased text-lg  leading-9  text-justify">
                <p>
                  Hi! I am a Computer Science student at IIIT Kottayam and a
                  passionate tech enthusiast. I love exploring and creating with
                  technology. Currently, I specialize in full-stack web
                  development using the MERN stack and Next.js. With a curious
                  mind and a drive for learning, I am always eager to tackle new
                  challenges and build impactful projects.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="bg-[#01020C] h-[50vh]" id="contact">
            <div className="header  flex items-center  py-8 justify-evenly">
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                // animate={{
                //   opacity: 1,
                //   x: 10,
                // }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
                className="w-[25%] bg-white/[0.5] h-[1px]"
              ></motion.div>
              <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="block text-center text-7xl  tracking-wide pb-3  transition-opacity "
              >
                Connect
              </motion.h1>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                // animate={{
                //   opacity: 1,
                //   x: 10,
                // }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
                className="w-[25%] bg-white/[0.5] h-[1px]"
              ></motion.div>
            </div>
            <Connect />
          </div>
        </div>
      </TracingBeam>
    </main>
  );
}
