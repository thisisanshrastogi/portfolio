import React from "react";
import { LampDemo } from "./ui/lamp";
import { FloatingNav } from "./ui/floating-nav";

const Hero = () => {
  const title = "I am Ansh Rastogi";
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#home" },
    { name: "About", link: "#home" },
  ];
  return (
    <div className="h-dvh" id="home">
      <FloatingNav navItems={navItems} />
      <LampDemo title={title} />
    </div>
  );
};

export default Hero;
