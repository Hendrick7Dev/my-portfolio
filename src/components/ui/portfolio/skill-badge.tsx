import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

/**
 * Variantes para o badge de habilidade
 */
export type SkillBadgeVariant = "default" | "outline" | "highlight"

/**
 * Propriedades para o componente SkillBadge
 */
interface SkillBadgeProps {
  /** Texto ou conteúdo do badge */
  children: ReactNode
  /** Variante do badge */
  variant?: SkillBadgeVariant
  /** Classes CSS adicionais */
  className?: string
}

/**
 * Componente de badge para habilidades e tecnologias
 * 
 * Um badge consistente para exibir habilidades e tecnologias no portfólio.
 */
export function SkillBadge({ children, variant = "default", className }: SkillBadgeProps) {
  // Mapeamento de variantes para classes
  const variantClasses = {
    default: "bg-slate-800 text-blue-400 border-slate-700",
    outline: "border-blue-500/50 text-blue-400",
    highlight: "bg-blue-500 text-white",
  }
  
  // Mapeia a variante para o tipo de variante do componente Badge
  const badgeVariant = variant === "highlight" ? "default" : variant === "outline" ? "outline" : "secondary"
  
  return (
    <Badge
      variant={badgeVariant}
      className={cn(variantClasses[variant], className)}
    >
      {children}
    </Badge>
  )
} 