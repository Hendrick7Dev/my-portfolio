import { SectionCard } from "@/components/ui/portfolio"

interface PortfolioFooterProps {
  copyright: string
  tagline: string
}

/**
 * Rodapé do portfólio
 * 
 * Exibe informações de copyright e tagline do portfólio.
 * Este componente pode ser renderizado no servidor pois não possui interatividade.
 */
export function PortfolioFooter({ copyright, tagline }: PortfolioFooterProps) {
  return (
    <footer className="mt-20">
      <SectionCard contentOnly className="bg-black/90">
        <div className="text-center py-8">
          <p className="text-gray-400">{copyright}</p>
          <p className="text-blue-400/70 text-sm mt-2">{tagline}</p>
        </div>
      </SectionCard>
    </footer>
  )
} 