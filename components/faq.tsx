'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react' // Added ChevronUp for clarity, but will use ChevronDown with rotation

// Using shadcn/ui Accordion primitives and customizing with framer-motion
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "@/lib/utils"
import Link from 'next/link'

const faqs = [
  {
    id: "item-1",
    question: "What software development services does your company offer?",
    answer: "We offer a comprehensive suite of software development services, including custom web application development, mobile app development (iOS and Android), cloud solutions, UI/UX design, and ongoing maintenance and support.",
  },
  {
    id: "item-2",
    question: "What industries do you specialize in?",
    answer: "We have extensive experience working across various industries, including fintech, healthcare, e-commerce, education, and real estate. Our adaptable approach allows us to cater to diverse business needs.",
  },
  {
    id: "item-3",
    question: "What sets your company apart from the competition?",
    answer: "Our commitment to innovation, transparent communication, agile development methodologies, and a strong focus on delivering measurable business value truly differentiate us. We prioritize client satisfaction and long-term partnerships.",
  },
  {
    id: "item-4",
    question: "Is my project idea and information kept confidential?",
    answer: "Absolutely. We adhere to strict confidentiality protocols and are happy to sign Non-Disclosure Agreements (NDAs) to ensure your intellectual property and project details remain secure and private.",
  },
]

// Custom AccordionItem to integrate framer-motion for content animation
const CustomAccordionItem = ({ value, question, answer }: { value: string; question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AccordionPrimitive.Item value={value} className="border-b border-gray-200">
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }} // Rotate 180 degrees when open
            transition={{ duration: 0.2 }}
            className={cn(
              "h-8 w-8 flex items-center justify-center rounded-full shrink-0",
              isOpen ? "bg-green-500 text-white" : "bg-gray-900 text-white"
            )}
            will-change="transform"
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ height: { duration: 0.280 }, opacity: { duration: 0.280 } }} // 280ms duration
            className="overflow-hidden"
            will-change="height, opacity"
          >
            <AccordionPrimitive.Content className="pb-4 pt-0 text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              {answer}
            </AccordionPrimitive.Content>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionPrimitive.Item>
  );
};


export default function FAQSection() {
  return (
    <section className="w-full flex flex-col items-center py-12 md:py-24 lg:py-32 bg-white text-gray-900">
      <div className="container px-4 md:px-6">
        {/* Top Heading Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter max-w-4xl leading-tight">
            Comprehensive Answers to the Most
            <br />
            <span className="inline-flex items-center gap-2">
              <Star className="w-6 h-6 fill-custom-teal-500 text-custom-teal-500" />
              Common Questions
            </span>
            <span className="text-gray-400"> About Our</span>
            <br />
            <span className="text-gray-400">Services and How We Work</span>
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

        {/* FAQ Section Header */}
        <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-4 mb-8">
          <h3 className="text-4xl font-bold">FAQ</h3>
          <Link href="#" className="inline-flex items-center gap-2 text-custom-teal-500 hover:text-custom-teal-600 transition-colors">
            All FAQ
            <div className="bg-custom-teal-500 text-white p-2 rounded-full">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Accordion List */}
        <AccordionPrimitive.Root type="multiple" className="w-full max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <CustomAccordionItem key={faq.id} value={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </AccordionPrimitive.Root>
      </div>
    </section>
  )
}
