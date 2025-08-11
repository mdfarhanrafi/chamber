"use client"

import type React from "react"
import { useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const RippleButton: React.FC<RippleButtonProps> = ({ children, className, ...props }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const id = Date.now()

      setRipples((prevRipples) => [...prevRipples, { x, y, id }])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== id))
      }, 600) // Match CSS animation duration
    }
    props.onClick?.(event)
  }

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden flex items-center gap-2 border w-fit p-2 px-4 rounded-full bg-gray-800 hover:bg-gray-700 backdrop-blur-2xl mx-auto text-white transition-colors duration-200",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white opacity-30 rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
            width: "0px",
            height: "0px",
          }}
        />
      ))}
    </button>
  )
}
