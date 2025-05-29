"use client"

import { SectionHeader } from "@/components/ui/portfolio"
import { ExperienceItem } from "./experience-item"
import { Monitor } from "lucide-react"
import type { Experience, ReadonlyOrMutable } from "@/types/portfolio"

interface ExperienceSectionProps {
  title: string
  experiences: ReadonlyOrMutable<Experience>
}

/**
 * Seção de experiência profissional
 * 
 * Este componente precisa do "use client" porque usa o componente SectionHeader
 * que tem um efeito de hover que requer interatividade do cliente.
 */
export function ExperienceSection({ title, experiences }: ExperienceSectionProps) {
  return (
    <section>
      <SectionHeader
        title={title}
        icon={Monitor}
      />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </section>
  )
} 