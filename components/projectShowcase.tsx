import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Showcase from "./ui/showcase";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { reviews } from "@/lib/mockData/data";
function ProjectShowcase() {
  return (
    <div className="bg-black text-white py-16 px-4 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-2">
        {/* Left Section - Heading */}
        <div className="flex flex-col p-3 text-center lg:text-left max-w-xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Our Stack Powers the World’s Most Beloved Companies
          </h1>
        </div>

        {/* Right Section - Company Buttons */}
        <div className="flex flex-col items-center space-y-4">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="flex items-center gap-2 border w-40 h-14 p-2 px-4 rounded-full bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA] text-white">
              <Image
                src="/Spotify.png"
                width={50}
                height={50}
                alt="Spotify Logo"
                className="bg-white rounded-full p-1"
              />
              <p>Spotify</p>
            </Button>
            <Button className="flex items-center gap-2 border w-40 h-14 p-2 px-4 rounded-full bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA] text-white">
              <Image
                src="/talentql.png"
                width={50}
                height={50}
                alt="TalentQL Logo"
                className="bg-white rounded-full p-1"
              />
              <p>TalentQL</p>
            </Button>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="flex items-center gap-2 border w-40 h-14 p-2 px-4 rounded-full bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA] text-white">
              <Image
                src="/Dropbox.png"
                width={50}
                height={50}
                alt="Dropbox Logo"
                className="bg-white rounded-full p-1"
              />
              <p>Dropbox</p>
            </Button>
            <Button className="flex items-center gap-2 border w-40 h-14 p-2 px-4 rounded-full bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA] text-white">
              <Image
                src="/fliqpay.png"
                width={35}
                height={35}
                alt="Fliqpay Logo"
                className="bg-white rounded-full p-1"
              />
              <p>Fliqpay</p>
            </Button>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="flex items-center gap-2 border w-40 h-14 p-2 px-4 rounded-full bg-gradient-to-b from-[#2CCEBA] to-[#2CCEBA] text-white">
              <Image
                src="/Bitmap.png"
                width={50}
                height={50}
                alt="Slack Logo"
                className="bg-white rounded-full p-1"
              />
              <p>Slack</p>
            </Button>
          </div>
        </div>
      </div>

      <Showcase />
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
      <InfiniteMovingCards items={reviews} direction="left" speed="slow" />
    </div>
  );
}

export default ProjectShowcase;
