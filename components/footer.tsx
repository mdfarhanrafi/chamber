import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
return (
  <footer className="w-full bg-gray-950 text-white py-16 px-4 md:px-6 lg:px-8">
    <div className="container mx-auto">
          <h1 className="text-5xl mb-2 md:text-6xl lg:text-7xl font-bold tracking-tighter">
            LET&apos;S TALK
          </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mb-12">
        {/* Left Column: Let's Talk, Description, Social Media */}
        <div className="space-y-8">
          <p className="text-base mb-4 mt-6 md:text-lg text-gray-300 max-w-md">
            A new era of energy, elegance, and elite competition begins here. Where passion meets performance on the court like never before.
          </p>
          <div className="space-y-4">
            <h3 className="text-lg mt-6 font-semibold text-white">Social media</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-gray-400">
              <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                Instagram <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                Twitter <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                Tiktok <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                Facebook <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                Linkedin <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="#" className="flex items-center gap-1 hover:text-white transition-colors">
                Youtube <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Column: Address, Phone, Email */}
        <div className="space-y-8">
          <div className="space-y-2 mt-6">
            <h3 className="text-lg font-semibold text-white">ADDRESS</h3>
            <p className="text-gray-300">
              1901 thornridge Cir,
              <br />
              Shiloh, Hawaii 81063
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">PHONE</h3>
            <p className="text-gray-300">[+1] 872-298-3989</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">EMAIL</h3>
            <p className="text-gray-300">hello@tranzit.com</p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hidden lg:flex justify-end items-start">
          <Image
            src="/footer.png"
            alt="Group of people working together in an office"
            width={200}
            height={200}
            className="rounded-xl object-cover w-full h-auto max-w-[300px]"
            priority // Image is likely above the fold or important for initial load [^3]
          />
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-dashed border-gray-700 my-12"></div>

      {/* Bottom Section: Copyright and Legal Links */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
        <p>&copy; {'2024 Software Chamber All Right Reserved'}</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  </footer>
)
}
