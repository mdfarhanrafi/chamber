interface ProcessStepProps {
  label: string
  number: number
  angle: number // in degrees
  radius: number // radius of the circle on which steps are placed
}

export function ProcessStep({ label, number, angle, radius }: ProcessStepProps) {
  // Convert angle from degrees to radians
  const angleRad = (angle * Math.PI) / 180

  // Calculate x and y coordinates relative to the center of the circle
  const x = radius * Math.cos(angleRad)
  const y = radius * Math.sin(angleRad)

  return (
    <div
      className="absolute flex flex-col items-center justify-center text-center z-10"
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span className="mb-1 sm:mb-2 text-xs sm:text-sm font-medium text-gray-300 whitespace-nowrap">{label}</span>
      <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-600 bg-gray-800 text-xs sm:text-sm font-bold text-white">
        {number}
      </div>
    </div>
  )
}
