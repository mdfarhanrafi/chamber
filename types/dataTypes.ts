export interface WhyChooseCardProps {
  title: string
  description: string
  icon: React.ElementType
  positionIndex: number // Index within the currently visible set (0, 1, 2, 3)
}

export interface ServiceCardProps {
  title: string
  description: string
  isHighlighted?: boolean
  index: number // For stagger
}

