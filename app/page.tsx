import Hero from "@/components/Hero";
import ParticleBackground from "@/components/Particles";
import { BentoGridSecondDemo } from "@/components/Projects";
import { AnimatedModalDemo } from "@/components/TaxiBuddyModal";

import { TypewriterEffect } from "@/components/ui/typewriter";

export default function Home() {
  return (
    <main className="relative text-white bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full bg-dot-neutral-400/[0.2]">
        <Hero />
        <div className="Projects" id="projects"></div>
        <h1 className="block w-full text-center text-7xl  tracking-wide my-5 mb-10">
          Projects
        </h1>
        <BentoGridSecondDemo />
        {/* <AnimatedModalDemo
          title="Taxi Buddy"
          content="lorem ipsum rendom random"
        /> */}

        <div
          style={{
            position: "relative",
            minHeight: "100vh",
            overflow: "hidden",
            backgroundColor: "black",
          }}
        >
          {/* <ParticleBackground /> */}
          <h1>Your App Content Here</h1>
        </div>
      </div>
    </main>
  );
}
