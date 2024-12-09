import { cn } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal";
import Image from "next/image";

import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-6  ",
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
        type: "spring",
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  icons = [],
  content,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  icons?: {
    logo: React.ReactNode;
    name: string;
  }[];
  content?: string;
  link?: string;
}) => {
  return (
    <Modal>
      <div
        className={cn(
          "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 max-h-[350px]  shadow-input dark:shadow-none p-2 dark:backdrop-blur-3xl dark:border-white/[0.6]  border-[1.5px] border-transparent flex flex-col  justify-between space-y-4  ",
          className
        )}
      >
        <ModalTrigger className=" w-full h-full relative overflow-hidden ">
          <Image
            src={image || "/next.svg"}
            alt="taxiBuddy"
            objectFit="contain"
            layout="fill"
            className="rounded-2xl"
          />

          <div className="group-hover/bento:translate-x-2 transition duration-200 absolute bottom-2 bg-neutral-900 bg-opacity-70 px-6 py-1 w-[97%]">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-100 mb-1 mt-2 text-lg">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-md dark:text-neutral-200">
              {description}
            </div>
          </div>
        </ModalTrigger>
      </div>

      <ModalBody>
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-2">
            {title}
          </h4>
          <div className="flex justify-center items-center w-full flex-col gap-4">
            <Image
              src={image || "/next.svg"}
              width={400}
              height={400}
              alt="hero"
              className="rounded-xl my-4"
            />
            <div className="Content text-neutral-100 text-center">
              {content}
            </div>
            <div className="my-1 bg-black-100">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer hover:border-b text-neutral-400 hover:text-white"
              >
                Github Repo
              </a>
            </div>
          </div>
        </ModalContent>
        <ModalFooter className="gap-6 ">
          {icons.map((icon, idx) => {
            return (
              <div className="wrapper relative  group" key={idx}>
                <div className="text-3xl">{icon.logo}</div>
                <div className=" rounded-xl absolute -top-11 -translate-x-6 text-center opacity-0 invisible w-20 px-2 py-1  text-sm  group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out ">
                  {icon.name}
                </div>
              </div>
            );
          })}
          {/* <AnimatedTooltip items={[icons]} /> */}
          {/* <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
            Cancel
          </button> */}
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};
