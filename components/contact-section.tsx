"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, Loader2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FloatingLabelInput } from "@/components/ui/floating-label-input"
import { FloatingLabelTextarea } from "@/components/ui/floating-label-textarea"
import { toast } from "sonner" // Import Toaster

export default function ContactSection() {
const [isLoading, setIsLoading] = useState(false)


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsLoading(true)

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000))

  setIsLoading(false)
  toast( "Message Sent!",{
    description: "Your message has been successfully sent. We'll get back to you soon.",
    className: "bg-green-500 text-white", // Custom styling for success toast
    duration: 3000,
  })
}

return (
  <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Let&apos;s talk about your next <span className="text-gray-400">project.</span>
          <br />
          <span className="text-gray-400">We&apos;re here to help.</span>
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
         Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
        </p>
      </div>
      <div className="mx-auto max-w-5xl overflow-hidden grid gap-4 md:grid-cols-2 bg-white">
        <div className="hidden md:block">
          <Image
            src="/contactimage.png"
            alt="Smiling man with long hair in a bun looking to the side"
            width={400}
            height={400}
            className="object-cover w-full h-full"
            priority // Image is above the fold, so set priority to true [^3]
          />
        </div>
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="grid gap-6">
           
              <FloatingLabelInput id="first-name" label="First Name" type="text" />
              <FloatingLabelInput id="last-name" label="Last Name" type="text" />
         
            <FloatingLabelInput id="email" label="Email" type="email" />
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <Select defaultValue="+1">
                <SelectTrigger className="w-[100px] h-auto bg-gray-100 border-input focus-visible:ring-0 focus-visible:border-custom-teal-500 focus-visible:shadow-[0_0_0_2px_rgba(0,237,197,0.2),0_0_0_4px_rgba(0,237,197,0.1)]">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+91">+91</SelectItem>
                </SelectContent>
              </Select>
              <FloatingLabelInput id="phone" label="Phone" type="tel"/>
            </div>
            <FloatingLabelInput id="job-title" label="Job Title" type="text" />
            <FloatingLabelTextarea id="message" label="Your message" />
            <Button
              type="submit"
              className="w-[273px] h-12 bg-gradient-to-r from-[#16AD71] to-[#16AD71]
 hover:bg-custom-teal-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-200 flex items-center justify-between gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  Submit
                  <ArrowUpRight className="h-6 w-6 rounded-lg"/>
                </>
              )}
            </Button>
          </form>
        </div>
      </div>


  </section>
)
}
