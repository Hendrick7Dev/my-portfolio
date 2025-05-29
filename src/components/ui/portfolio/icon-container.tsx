import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

/**
 * Variantes para o contêiner de ícone
 */
export type IconContainerVariant = "square" | "circle" | "rounded"

/**
 * Tamanhos para o contêiner de ícone
 */
export type IconContainerSize = "sm" | "md" | "lg"

/**
 * Propriedades para o componente IconContainer
 */
interface IconContainerProps {
  /** Ícone a ser exibido */
  icon?: LucideIcon
  /** Conteúdo personalizado em vez de um ícone */
  children?: ReactNode
  /** Variante do contêiner */
  variant?: IconContainerVariant
  /** Tamanho do contêiner */
  size?: IconContainerSize
  /** Classes CSS adicionais */
  className?: string
}

/**
 * Componente de contêiner para ícones
 * 
 * Um contêiner consistente para ícones com diferentes formas e tamanhos.
 */
export function IconContainer({ 
  icon: Icon, 
  children, 
  variant = "square", 
  size = "md", 
  className 
}: IconContainerProps) {
  // Mapeamento de variantes para classes
  const variantClasses = {
    square: "rounded-lg",
    circle: "rounded-full",
    rounded: "rounded-xl",
  }
  
  // Mapeamento de tamanhos para classes
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12",
  }
  
  // Mapeamento de tamanhos para tamanhos de ícones
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }
  
  return (
    <div className={cn(
      "bg-slate-800 flex items-center justify-center flex-shrink-0",
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      {Icon ? <Icon className={cn("text-blue-400", iconSizes[size])} /> : children}
    </div>
  )
} 