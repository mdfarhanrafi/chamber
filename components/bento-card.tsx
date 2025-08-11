"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const people = [
  {
    id: 1,
    src: "/women1.png?height=200&width=200",
    alt: "Portrait of a young woman",
  },
  {
    id: 2,
    src: "/man1?height=200&width=200",
    alt: "Portrait of a young man",
  },
  {
    id: 3,
    src: "/women2.png?height=200&width=200",
    alt: "Portrait of a young woman",
  },
]

export default function BentoCard() {
  const [activeIndex, setActiveIndex] = useState(1) // Start with the middle image active

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A] p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-[#262626] shadow-2xl">
        {/* Background gradient/glow effect */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          background: 'radial-gradient(circle at 25% 50%, #00FFC2, transparent 50%)',
        }} />

        <div className="relative z-10 flex flex-col lg:flex-row items-stretch min-h-[300px]">
          {/* Left side: Image Slider */}
          <div className="relative flex-1 flex flex-col items-center justify-center p-6 lg:p-8 bg-gradient-to-r from-[#262626] to-[#262626]/80">
            {/* Mock browser controls */}
            <div className="absolute top-4 left-4 flex space-x-1">
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <span className="w-2 h-2 rounded-full bg-gray-600" />
              <span className="w-2 h-2 rounded-full bg-gray-600" />
            </div>
            <div className="absolute top-4 w-1/3 h-1 rounded-full bg-gray-700" />

            <div className="flex items-center justify-center space-x-4 mt-8">
              {people.map((person, index) => (
                <div
                  key={person.id}
                  className={cn(
                    "relative rounded-lg overflow-hidden transition-all duration-300 ease-in-out",
                    index === activeIndex
                      ? "w-32 h-32 md:w-40 md:h-40 shadow-lg ring-2 ring-white/50"
                      : "w-24 h-24 md:w-32 md:h-32 grayscale opacity-70"
                  )}
                  onClick={() => setActiveIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={person.src || "/placeholder.svg"}
                    alt={person.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="flex space-x-2 mt-6">
              {people.map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors duration-300",
                    index === activeIndex ? "bg-white" : "bg-gray-600"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          {/* Right side: Text Content */}
          <div className="flex-1 flex flex-col justify-center p-6 lg:p-8 text-white space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Software Service Solutions</h2>
            <p className="text-base md:text-lg text-gray-300">
              Plan, track, and manage projects with precision tools. Streamline your workflow and achieve your goals
              with our comprehensive suite of services.
            </p>
            <Button className="mt-4 px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors duration-300 self-start">
              Discover
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
