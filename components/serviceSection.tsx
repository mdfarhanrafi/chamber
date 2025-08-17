"use client"

import { useState } from "react"
import type { ServiceCardProps } from "@/types/dataTypes"
import Image from "next/image"
import Link from "next/link"
import { motion,easeOut } from "framer-motion"
import { Star, ArrowRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { serviceItems, benefits, stats } from "@/lib/mockData/data"
// Placeholder image for the main section
const MAIN_SECTION_IMAGE = "/services.png"

// Variants for card entry animation (function for stagger)
const cardEntryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: easeOut,
    },
  }),
}

// ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({
  title,
  description,
  isHighlighted = false,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative p-12 rounded-xl shadow-sm border flex flex-col justify-between h-full cursor-pointer",
        "transition-all duration-180 ease-out",
        isHighlighted
          ? "bg-[#2CCEBA] text-white border-custom-teal-500"
          : "bg-gray-50 text-gray-900 border-gray-100",
        isHovered &&
          "shadow-[0_0_0_2px_rgba(0,237,197,0.2),0_0_0_4px_rgba(0,237,197,0.1)]"
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardEntryVariants}
      custom={index}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ willChange: "transform, box-shadow" }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p
        className={cn(
          "text-sm",
          isHighlighted ? "text-white/80" : "text-gray-600"
        )}
      >
        {description}
      </p>
      <div className="mt-6 flex justify-end">
        <motion.div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-180",
            isHighlighted ? "bg-white text-[#2CCEBA]" : "bg-gray-200 text-gray-900",
            isHovered && "bg-[#2CCEBA] text-white"
          )}
          animate={{ y: isHovered ? -6 : 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <motion.div
            animate={{ x: isHovered ? 6 : 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{ willChange: "transform" }}
          >
            <ArrowUpRight className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <>
      {/* "At Software Chamber" Section */}
      <section className="w-full flex flex-col items-center py-8 md:py-12 lg:py-14 bg-white text-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter max-w-4xl leading-tight">
              <span className="inline-flex items-center gap-2">
                <Star className="w-6 h-6 fill-custom-teal-500 text-[#2CCEBA]" />
                At Software Chamber,
              </span>
              <span className="text-gray-400"> we specialize in</span>
              <br />
              turning complex challenges into elegant
              <span className="text-gray-400"> digital solutions</span>
              <span className="inline-block ml-2 transform rotate-45 text-gray-400">
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
                  className="lucide lucide-mountain-snow"
                >
                  <path d="M8 3L4 10L2 12L6 21H18L22 12L20 10L16 3" />
                  <path d="M10 8L12 12L14 8" />
                  <path d="M15 2H17C18.1045 2 19 2.89545 19 4V6C19 7.10455 18.1045 8 17 8H15C13.8955 8 13 7.10455 13 6V4C13 2.89545 13.8955 2 15 2Z" />
                  <path d="M8 2H10C11.1045 2 12 2.89545 12 4V6C12 7.10455 11.1045 8 10 8H8C6.89545 8 6 7.10455 6 6V4C6 2.89545 6.89545 2 8 2Z" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column: Stats */}
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <p className="text-4xl md:text-5xl font-bold text-gray-900 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-lg text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Middle Column: Image */}
            <div className="flex justify-center items-center">
              <Image
                src={MAIN_SECTION_IMAGE}
                alt="People collaborating in an office"
                width={500}
                height={400}
                className="rounded-xl object-cover w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-[400px]"
                priority
              />
            </div>

            {/* Right Column: Benefits */}
            <div className="space-y-6 md:space-y-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="flex items-start gap-3 text-left"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#2CCEBA] text-white text-sm font-bold shrink-0">
                    {benefit.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {benefit.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "Services" Grid Section */}
      <section className="w-full flex flex-col items-center py-8 md:py-12 lg:py-16 bg-white text-gray-900">
        <div className="container px-4 md:px-6">
          {/* Services Header */}
          <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-4 mb-8">
            <h3 className="text-3xl font-bold flex items-center gap-2">
              Services
              <Star className="w-6 h-6 fill-[#2CCEBA] text-[#2CCEBA]" />
            </h3>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-custom-teal-500 hover:text-custom-teal-600 transition-colors"
            >
              All Services
              <div className="bg-[#2CCEBA] text-white p-2 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((item, index) => (
              <ServiceCard key={index} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}