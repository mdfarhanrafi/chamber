import { Button } from "./ui/button"
import { ArrowRight, Code, LayoutGrid, User } from "lucide-react"
import { Sparkles } from "./sparkles"
import { Header } from "./ui/header"
import { CardStack } from "./ui/card-stack"
import { CARDS } from "@/lib/mockData/data"

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col bg-black text-white relative mx-auto overflow-hidden min-h-screen">
        {" "}
        {/* Added min-h-screen */}
        <Header /> {/* New Header component */}
        <Sparkles className="absolute top-0 left-0 w-full h-full pointer-events-none" />
        <main className="flex-1 flex flex-col items-center justify-center text-center pt-2 px-4 py-10 sm:py-24 md:py-10 lg:py-10 relative z-10">
          <span className="inline-block text-xs sm:text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#2CCEBA] bg-gradient-to-b from-[#000000] to-[#2CCEBA] mb-4">
            Smarter Idea, instant solutions
          </span>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tighter mb-6 max-w-4xl mx-auto">
            <span className="bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent">
              We are your Software 
            </span>
            <br className="hidden sm:block" /> {/* Break line on larger screens */}
            <span className="flex items-center justify-center gap-2 sm:gap-4 mt-2 sm:mt-4">
            <span className="bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent">
              Development
            </span>
              <span className="inline-flex items-center justify-center p-2 sm:p-3 border border-[#2CCEBA] rounded-lg shadow-lg shadow-[#2CCEBA]/30 ring-1 ring-[#2CCEBA]/50">
                <Code className="h-6 w-6 sm:h-8 sm:w-8 text-[#2CCEBA]" />
              </span>
              <span className="inline-flex items-center justify-center p-2 sm:p-3 border border-[#2CCEBA] rounded-lg shadow-lg shadow-[#2CCEBA]/30 ring-1 ring-[#2CCEBA]/50">
                <LayoutGrid className="h-6 w-6 sm:h-8 sm:w-8 text-[#2CCEBA]" />
              </span>
              <span className="bg-gradient-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-transparent">
              Team
            </span>
            </span>
            <span className="text-white">in The Cloud</span>
          </h3>
          <div>
            <Button
              size="lg"
              className="flex justify-between border border-gray-700 w-40 p-2 px-4 rounded-full bg-gray-800/50 backdrop-blur-2xl text-white hover:bg-gray-700/70 transition-colors mx-auto"
            >
              Contact Us
              <span className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </main>
        <div className="mx-auto pb-4">
          <CardStack items={CARDS} />
        </div>
      </div>
    </>
  )
}

export default HeroSection
