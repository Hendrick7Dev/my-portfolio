import { ServerSectionHeader } from "@/components/ui/portfolio/server-section-header"
import { ExperienceItem } from "@/ui/portfolio"
import { ReadonlyOrMutable, Locale } from "@/locales"
import { getServerScopedI18n } from "@/hooks/server-i18n"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: ReadonlyOrMutable<string>
}

interface ServerExperienceSectionProps {
  locale: Locale
  experiences: ReadonlyOrMutable<Experience>
}

/**
 * Seção de experiência (versão servidor)
 * 
 * Este componente pode ser renderizado no servidor, aumentando a performance.
 * Usa ServerSectionHeader em vez do SectionHeader interativo.
 */
export function ServerExperienceSection({ 
  locale,
  experiences 
}: ServerExperienceSectionProps) {
  const t = getServerScopedI18n(locale)
  const sections = t('sections')
  const labels = t('labels')
  
  return (
    <section>
      <ServerSectionHeader
        title={sections.experience}
        iconName="💼"
      />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            experience={experience}
            keyAchievementsLabel={labels.keyAchievements}
          />
        ))}
      </div>
    </section>
  )
} 