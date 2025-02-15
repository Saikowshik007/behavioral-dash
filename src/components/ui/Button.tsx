import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full py-3 text-white font-semibold rounded-lg",
        "bg-gradient-to-r from-[#5D5FEF] to-[#7879F1]", // Gradient matching the image
        "hover:from-[#4D4FDF] hover:to-[#6869E1]", // Slightly darker on hover
        "focus:outline-none focus:ring-2 focus:ring-[#5D5FEF] focus:ring-opacity-50",
        "transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button