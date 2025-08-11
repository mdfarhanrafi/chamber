"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { RippleButton } from "./ripple-button"
import { Sparkles } from "../sparkles"
import ToggleIcon from "./toggle-icon" // Import the new toggle icon

export default function Showcase() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [sheenPosition, setSheenPosition] = useState({ x: 50, y: 50 }) // Percentage for radial-gradient

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY

      // Calculate tilt within 6 degrees
      const maxTilt = 6
      const tiltX = (mouseY / (rect.height / 2)) * maxTilt * -1 // Invert Y for natural tilt
      const tiltY = (mouseX / (rect.width / 2)) * maxTilt

      setTilt({ x: tiltX, y: tiltY })

      // Calculate sheen position (0-100%)
      const sheenX = ((e.clientX - rect.left) / rect.width) * 100
      const sheenY = ((e.clientY - rect.top) / rect.height) * 100
      setSheenPosition({ x: sheenX, y: sheenY })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
      setSheenPosition({ x: 50, y: 50 }) // Reset sheen to center
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-4xl mx-auto p-8 rounded-3xl overflow-hidden
                 border border-gray-700
                 bg-gradient-to-t from-[#22C1AD] to-[#2CCEBA]   
                 shadow-2xl transition-transform duration-100 ease-out
                 transform-gpu perspective-[1000px]
                 animate-fade-in-up" // Reveal from bottom
      style={{
        // Updated background gradient to match the image (teal to dark blue)
        background: `radial-gradient(circle at ${sheenPosition.x}% ${sheenPosition.y}%, rgba(255,255,255,0.1) 0%, transparent 60%), linear-gradient(to bottom right, #22C1AD, #2CCEBA)`,
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0px)`,
      }}
    >
      {/* Background Sparkles */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Sparkles density={1000} speed={0.8} color="#48b6ff" direction="top" className="absolute inset-0" />
      </div>

      <div className="relative z-10 grid gap-4 text-center">
        <span className="inline-block xl:text-base text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#3273ff] bg-[#0f1c35]">
          Smarter idea, instant solution
        </span>
        {/* Lightning Bolt Logo */}
        <Image
          src="/thunder.png"
          alt="Lightning Bolt Logo"
          width={64}
          height={64}
          className="mx-auto mb-4"
        />
        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent leading-[120%] tracking-tighter">
          Uncover the Design and Development <br /> Projects <span className="text-white">That Set Us Apart</span>
        </h2>
        <RippleButton className="mt-4">
          Contact Us <ToggleIcon className="w-4 h-4" /> {/* Use the new ToggleIcon */}
        </RippleButton>
      </div>
    </div>
  )
}
