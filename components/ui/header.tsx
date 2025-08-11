"use client"

import { Button } from "@/components/ui/button"
import { Menu, ArrowRight } from "lucide-react" // For the hamburger menu icon and arrow right icon

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 sm:p-6 lg:px-8">
      <div className="flex items-center gap-2">
        {/* Placeholder for logo image, using text for now */}
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2CCEBA] to-[#7b9cda] rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">SC</div>
        </div>
        <span className="text-lg font-semibold text-white">Software Chamber</span>
      </div>
      <nav className="flex items-center gap-4">
        <Button
          size="lg"
          className="hidden sm:flex justify-between border border-gray-700 w-40 p-2 px-4 rounded-full bg-gray-800/50 backdrop-blur-2xl text-white hover:bg-gray-700/70 transition-colors"
        >
          Contact Us
          <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden text-white hover:bg-gray-800/50 rounded-full"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </nav>
    </header>
  )
}
