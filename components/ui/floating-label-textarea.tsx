"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export interface FloatingLabelTextareaProps
extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
label: string
}

const FloatingLabelTextarea = React.forwardRef<
HTMLTextAreaElement,
FloatingLabelTextareaProps
>(({ className, label, id, ...props }, ref) => {
const [isFocused, setIsFocused] = React.useState(false)
const [hasValue, setHasValue] = React.useState(false)

const handleFocus = () => setIsFocused(true)
const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
  setIsFocused(false)
  setHasValue(!!e.target.value)
}
const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setHasValue(!!e.target.value)
  props.onChange?.(e)
}

return (
  <div className="relative">
    <Textarea
      id={id}
      className={cn(
        "peer min-h-[100px] w-full rounded-md border border-input bg-gray-100 px-4 py-2 text-sm shadow-sm transition-all duration-160",
        "focus-visible:outline-none focus-visible:ring-0 focus-visible:border-custom-teal-500", // Remove default ring, add custom border
        "focus-visible:shadow-[0_0_0_2px_rgba(0,237,197,0.2),0_0_0_4px_rgba(0,237,197,0.1)]", // Custom glow
        className
      )}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder="" // Important: placeholder is empty, label acts as placeholder
      ref={ref}
      {...props}
    />
    <Label
      htmlFor={id}
      className={cn(
        "absolute left-4 top-4 text-sm text-muted-foreground transition-all duration-160 ease-in-out",
        (isFocused || hasValue) && "-translate-y-[calc(100%+6px)] text-xs text-custom-teal-500" // Move up 6px
      )}
    >
      {label}
    </Label>
  </div>
)
})
FloatingLabelTextarea.displayName = "FloatingLabelTextarea"

export { FloatingLabelTextarea }
