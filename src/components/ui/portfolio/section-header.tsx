import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Propriedades para o componente SectionHeader
 */
interface SectionHeaderProps {
  /** Título da seção */
  title: string
  /** Ícone a ser exibido */
  icon: LucideIcon
  /** Classes CSS adicionais */
  className?: string
}

/**
 * Componente de cabeçalho para seções do portfólio
 * 
 * Um cabeçalho consistente com ícone e título para as seções principais do portfólio.
 */
export function SectionHeader({ title, icon: Icon, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
    </div>
  )
} 