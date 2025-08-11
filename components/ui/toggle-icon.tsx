import type React from "react"

interface ToggleIconProps extends React.SVGProps<SVGSVGElement> {}

const ToggleIcon: React.FC<ToggleIconProps> = (props) => (
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
    {...props}
  >
    <rect width="20" height="12" x="2" y="6" rx="6" ry="6" />
    <circle cx="18" cy="12" r="3" />
  </svg>
)

export default ToggleIcon
