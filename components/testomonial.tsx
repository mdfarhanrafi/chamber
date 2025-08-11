'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react' // For the star icon in the badge

// Placeholder images for avatars and logos
const AVATAR_PLACEHOLDER = '/man1.png?height=64&width=64'
const LOGO_PLACEHOLDER = '/placeholder.svg?height=32&width=96'

const testimonials = [
  {
    quote: "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo.",
    author: "Alex Larkins",
    title: "Art director at Airbnb",
    avatar: AVATAR_PLACEHOLDER,
   
  },
  {
    quote: "This platform has revolutionized our workflow. The insights provided are unparalleled, leading to significant improvements in our decision-making process.",
    author: "Jane Doe",
    title: "CEO of Tech Solutions",
    avatar: AVATAR_PLACEHOLDER,
  
  },
  {
    quote: "An absolute game-changer for our marketing strategy. The dynamic content generation is incredibly powerful and easy to integrate.",
    author: "John Smith",
    title: "Marketing Lead at Global Corp",
    avatar: AVATAR_PLACEHOLDER,
   
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Autoplay every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Variants for cross-fade transition
  const slideVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  }

  // Variants for avatar and badge fade-up with stagger
  const itemVariants = { // This is the definition for itemVariants
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // 60ms stagger
      },
    },
  };

  // Avatar parallax (subtle continuous float)
  const avatarFloatVariants = {
    float: {
      y: [0, -5, 0], // Move up and down slightly
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="w-full flex flex-col items-center py-12 md:py-24 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full bg-green-700/20 px-4 py-2 text-sm font-medium text-green-400 border border-green-700"
          variants={itemVariants} // itemVariants is used here
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          will-change="transform, opacity"
        >
          <Star className="w-4 h-4 fill-green-400 text-green-400" />
          Smarter Idea, instant solutions
        </motion.div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter max-w-3xl">
          Don&apos;t just take our word for it. Hear <span className="text-gray-400">what our clients say</span>
        </h2>

        {/* Testimonial Slider */}
        <div className="relative w-full max-w-4xl h-[300px] md:h-[250px] lg:h-[220px] flex items-center justify-center">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ opacity: { duration: 0.5 } }} // Cross-fade in 500ms
              className="absolute w-full h-full p-6 md:p-8 lg:p-10 bg-gray-900 rounded-xl border border-gray-800 shadow-lg flex flex-col justify-between sheen-effect"
              aria-live="polite" // Announce changes to screen readers
              will-change="transform, opacity"
            >
              <p className="text-lg md:text-xl text-gray-200 mb-6 flex-grow">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
              <motion.div
                className="flex items-center justify-between"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                will-change="transform, opacity"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    variants={avatarFloatVariants}
                    animate="float"
                    className="will-change-transform"
                  >
                    <Image
                      src={currentTestimonial.avatar || "/placeholder.svg"}
                      alt={currentTestimonial.author}
                      width={64}
                      height={64}
                      className="rounded-full object-cover border-2 border-gray-700"
                    />
                  </motion.div>
                  <div className="text-left">
                    <p className="font-semibold text-white">{currentTestimonial.author}</p>
                    <p className="text-sm text-gray-400">{currentTestimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
