import React from "react";
import { LampDemo } from "./ui/lamp";
import { FloatingNav } from "./ui/floating-nav";
import { ParticleBackground } from "./Particles";

const Hero = () => {
  const title = "I am Ansh Rastogi";
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "About", link: "#about" },
    { name: "Connect", link: "#contact" },
  ];
  return (
    <div className="h-dvh relative" id="home">
      <ParticleBackground />
      <FloatingNav navItems={navItems} />
      <LampDemo title={title} />
    </div>
  );
};

export default Hero;
