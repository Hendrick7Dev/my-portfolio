import { cn } from "@/lib/utils"

/**
 * Propriedades para o componente ServerSectionHeader
 */
interface ServerSectionHeaderProps {
  /** Título da seção */
  title: string
  /** Nome do ícone a ser exibido */
  iconName: string
  /** Classes CSS adicionais */
  className?: string
}

/**
 * Componente de cabeçalho para seções do portfólio - Versão para servidor
 * 
 * Esta versão não utiliza os componentes Lucide diretamente, apenas o nome do ícone,
 * permitindo que seja renderizada no servidor.
 */
export function ServerSectionHeader({ title, iconName, className }: ServerSectionHeaderProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
        <span className="w-6 h-6 text-blue-400">{iconName}</span>
      </div>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
    </div>
  )
} 