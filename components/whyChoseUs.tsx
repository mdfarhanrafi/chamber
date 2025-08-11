"use client"

import type React from "react"
import type { WhyChooseCardProps } from "@/types/dataTypes"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import whyChooseItems from "@/lib/mockData/data"
import { Separator } from "@/components/ui/separator"


// WhyChooseCard Component


const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ title, description, icon: Icon, positionIndex }) => {
  // Wave effect: 0 for even indices, 20px down for odd indices
  const initialY = positionIndex % 2 === 0 ? 0 : 20

  return (
    <motion.div
      className="relative bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-auto will-change-transform will-change-opacity"
      initial={{ opacity: 0, y: initialY + 50, rotate: 1 }} // Initial state with wave offset + fade-up
      whileInView={{ opacity: 1, y: initialY, rotate: 0 }} // Animate to wave offset
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{
        y: initialY - 6, // Raise 6px from its current wave position
        boxShadow: "0 0 0 2px rgba(0,237,197,0.2), 0 0 0 4px rgba(0,237,197,0.1)", // Soft outline glow
        transition: { duration: 0.2 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }} // Transition for initial entry
    >
      <div className="flex justify-between items-start">
     
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <motion.div
          className="bg-[#2CCEBA] p-2 rounded-full text-white glitter-effect" // Adjusted p and icon size
          whileHover={{ rotate: 8, transition: { duration: 0.2 } }} // Gentle 8 degree tilt
          will-change="transform"
        >
            
          <Icon className="w-5 h-5 caret-cyan-400" /> {/* Adjusted icon size */}
        </motion.div>
      </div>
      <Separator className="my-2" />
      <div className="flex-1 p-0">
      <p className="text-gray-600 text-sm">{description}</p> {/* Adjusted text size */}
      </div>
    </motion.div>
  )
}

export default function WhyChooseSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(3) // Default for large screens

  // Function to determine cards per page based on window width
  const getCardsPerPage = () => {
    if (typeof window === "undefined") return 3 // Default for SSR
    if (window.innerWidth >= 1024) return 4 // 4 cards on large screens
    if (window.innerWidth >= 768) return 2 // 2 cards on medium screens
    return 1 // 1 card on small screens
  }

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage())
    }
    handleResize() // Initial calculation
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - cardsPerPage))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(whyChooseItems.length - cardsPerPage, prev + cardsPerPage))
  }

  // Slice the array to get only the currently visible cards
  const visibleCards = whyChooseItems.slice(currentIndex, currentIndex + cardsPerPage)

  return (
    <section className="w-full flex flex-col items-center py-12 md:py-24 lg:py-32 bg-white text-gray-900">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter max-w-3xl">
          Why Choose <span className="text-gray-900">Softwarechamber</span>
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content
          generation.
        </p>
        <Button className="bg-[#2CCEBA] hover:bg-custom-teal-600 text-white text-lg font-semibold rounded-full px-8 py-3 shadow-lg transition-all duration-200 flex items-center gap-2">
          Let&apos;s Discuss
          <ArrowUpRight className="h-5 w-5" />
        </Button>

        {/* Cards Slider */}
        <div className="relative w-full p-2 max-w-6xl mx-auto mt-12">
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {" "}
              {/* Updated grid for 4 columns */}
              {visibleCards.map((item, positionIndex) => (
                <WhyChooseCard key={item.title} {...item} positionIndex={positionIndex} />
              ))}
            </div>
         

          {/* Navigation Arrows */}
          <Button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-10"
            onClick={handlePrev}
            aria-label="Previous card"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-10"
            onClick={handleNext}
            aria-label="Next card"
            disabled={currentIndex >= whyChooseItems.length - cardsPerPage}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
