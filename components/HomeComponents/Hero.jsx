import React from "react";
import { Button } from "../ui/button";
import { CardSpotlight } from "../ui/CardSpotlight";
import Image from "next/image";
import Container from "../ui/Container";

const Hero = () => {
  return (
    <>
      <div className="flex  animate_in justify-center gap-4 items-center flex-col h-[60vh] max-w-5xl m-auto ">
        <span class="relative group inline-block w-fit mx-auto overflow-hidden rounded-full p-[1px]">
          <span class="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#71717a_0%,#27272a_50%,#71717a_100%)] animate-spin duration-700 rounded-full group-hover:animate-none"></span>
          <div class="flex gap-1 h-full group w-full items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-200 backdrop-blur-3xl hover:backdrop-blur-2xl hover:shadow-lg transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sparkles mr-1 h-3 w-3"
            >
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
              <path d="M5 3v4"></path>
              <path d="M19 17v4"></path>
              <path d="M3 5h4"></path>
              <path d="M17 19h4"></path>
            </svg>
            <p>Join the Open Source Movement</p>
          </div>
        </span>
        <h1 className="text-4xl  sm:text-6xl font-bold text-center   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          "Unleash your potential, contribute to open source."
        </h1>
        <p className=" text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          OpenDevHub is a community of developers, designers, and creators
        </p>
        <div className="flex justify-between gap-4">
          <Button>Get Started</Button>
          <Button>Join Us</Button>
        </div>
      </div>
      {/* <Container>
        <CardSpotlight hoverEffect>
          <h3 className="text-lg font-bold">Open Source Projects</h3>
          <p className="text-slate-100">
            Explore and contribute to open source projects
          </p>
          <h3 className="text-lg font-bold">Community</h3>
          <p className="text-slate-100">
            Join our community and meet like-minded people
          </p>
        </CardSpotlight>
      </Container> */}
    </>
  );
};

export default Hero;