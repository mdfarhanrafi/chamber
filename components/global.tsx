"use client"
import React, { useState, useEffect } from "react";
import Earth from "@/components/Globe";
import { Sparkles } from "@/components/sparkles";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { steps } from "@/lib/mockData/data";
import { ProcessStep } from "./ui/process-step";
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile;
}
function index() {
  const isMobile = useIsMobile();
  const circleRadius = 375;
  return (
    <>
      <div className="h-screen overflow-hidden bg-black text-white">
        <article className="grid gap-4 text-center relative z-0 pt-10">
          <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#2CCEBA]  bg-gradient-to-b from-[#000000] to-[#2CCEBA]">
            Smarter ideas, Smarter solutions
          </span>
          <h1 className="text-4xl  font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            Our Software
            <br />
            Development Process
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
          <div>
            <Button
              size="lg"
              className="flex justify-between border w-40 p-2 px-4 rounded-full bg-gradient-to-b from-[#0d0d0d] to-[#f3f4f4]  backdrop-blur-2xl mx-auto text-white"
            >
              Contact Us
              <ArrowRight className="inline-block ml-2 h-5 w-5 text-[#292b2b]" />
            </Button>
          </div>

          <Sparkles className="absolute top-0 left-0 w-full h-full pointer-events-none" />

          {isMobile && (
            <div className="scale-[1.5] translate-y-[50%]">
              <Earth key="mobile-earth" />
            </div>
          )}
          {!isMobile && (
            <div className="border-2 border-dashed h-[750px] w-[750px] border-white rounded-full p-10 mx-auto translate-y-[10%]">
              <div className="scale-[1.5] translate-y-[50%]">
                <Earth key="desktop-earth" />
              </div>
              {steps.map((step) => (
                <ProcessStep
                  key={step.number}
                  label={step.label}
                  number={step.number}
                  angle={step.angle}
                  radius={circleRadius}
                />
              ))}
            </div>
          )}
        </article>
      </div>
    </>
  );
}

export default index;
