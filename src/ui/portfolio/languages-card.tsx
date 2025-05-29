import { SectionCard } from "@/components/ui/portfolio"
import { SkillBadge } from "@/components/ui/portfolio"
import { ReadonlyOrMutable } from "@/locales"

interface LanguageSkill {
  name: string
  level: string
}

interface LanguagesCardProps {
  title: string
  languages: ReadonlyOrMutable<LanguageSkill>
}

/**
 * Card de idiomas falados
 * 
 * Exibe os idiomas falados com seus respectivos níveis de proficiência.
 * Este componente pode ser renderizado no servidor pois não possui interatividade.
 */
export function LanguagesCard({ title, languages }: LanguagesCardProps) {
  return (
    <SectionCard title={title}>
      <div className="space-y-4">
        {languages.map((lang, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="font-medium text-white">{lang.name}</span>
            <SkillBadge
              variant={index < 2 ? "highlight" : "outline"}
            >
              {lang.level}
            </SkillBadge>
          </div>
        ))}
      </div>
    </SectionCard>
  )
} 