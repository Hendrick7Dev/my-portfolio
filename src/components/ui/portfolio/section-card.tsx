import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Propriedades para o componente SectionCard
 */
interface SectionCardProps {
  /** Título do card */
  title?: string
  /** Ícone a ser exibido junto ao título */
  icon?: LucideIcon
  /** Conteúdo do card */
  children: ReactNode
  /** Classes CSS adicionais para o card */
  className?: string
  /** Classes CSS adicionais para o conteúdo */
  contentClassName?: string
  /** Se o card é destacado */
  featured?: boolean
  /** Se deve exibir apenas o conteúdo sem cabeçalho */
  contentOnly?: boolean
}

/**
 * Componente de card para seções do portfólio
 * 
 * Um componente reutilizável para exibir informações em formato de card,
 * com estilos consistentes em todo o portfólio.
 */
export function SectionCard({
  title,
  icon: Icon,
  children,
  className,
  contentClassName,
  featured = false,
  contentOnly = false
}: SectionCardProps) {
  const baseCardStyle = "border-0 shadow-xl backdrop-blur-xl"
  const featuredStyle = featured 
    ? "bg-black/80 ring-1 ring-blue-500/50" 
    : "bg-black/85 border border-blue-500/30"
  
  return (
    <Card className={cn(baseCardStyle, featuredStyle, className)}>
      {!contentOnly && title && (
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
            {Icon && <Icon className="w-6 h-6 text-blue-400" />}
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn("space-y-6", contentOnly && "p-0", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  )
} 