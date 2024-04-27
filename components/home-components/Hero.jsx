import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Container from "../ui/Container";
import { CardSpotlight } from "../CardSpotlight";
import NextImage from "../NextImage";

const Hero = () => {
  return (
    <>
      <div className="flex animate_in justify-center gap-4 items-center flex-col md:h-[60vh] h-[50vh] max-w-5xl m-auto px-4">
        <span className="relative group inline-block w-fit mx-auto overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#71717a_0%,#27272a_50%,#71717a_100%)] animate-spin duration-700 rounded-full group-hover:animate-none"></span>
          <div className="flex gap-1 h-full group w-full items-center justify-center rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-200 backdrop-blur-3xl hover:backdrop-blur-2xl hover:shadow-lg transition-all duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkles mr-1 h-3 w-3"
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
          Navigate the World of Open-Source Project
        </h1>
        <p className=" text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          Your guide to the internet’s most acclaimed open-source projects.
        </p>

        <Button>
          <Link href={"/"}>Explore Projects</Link>
        </Button>
      </div>
      <Container className={"animate_in max-w-5xl mx-auto p-4"}>
        <CardSpotlight hoverEffect>
          <NextImage
            className={"rounded-lg"}
            src={
              "https://res.cloudinary.com/dtmp7op6k/image/upload/v1712081372/Screenshot-2024-04-02-215837_ra7gfx.avif"
            }
            alt={"Banner"}
          />
        </CardSpotlight>
      </Container>
    </>
  );
};

export default Hero;
