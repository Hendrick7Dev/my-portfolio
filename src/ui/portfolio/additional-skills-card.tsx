import { Separator } from "@/components/ui/separator"
import { SectionCard, IconContainer, SkillBadge } from "@/components/ui/portfolio"
import { Award, BookOpen, Users, MessageCircle } from "lucide-react"
import { ReadonlyOrMutable } from "@/locales"

interface AdditionalSkill {
  title: string
  description: string
  details: ReadonlyOrMutable<string>
}

interface AdditionalSkillsCardProps {
  title: string
  skills: ReadonlyOrMutable<AdditionalSkill>
}

/**
 * Card de habilidades adicionais
 * 
 * Exibe habilidades adicionais como ensino, colaboração em equipe, etc.
 * Este componente pode ser renderizado no servidor pois não possui interatividade.
 */
export function AdditionalSkillsCard({ title, skills }: AdditionalSkillsCardProps) {
  // Ícones correspondentes para cada habilidade
  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0: return BookOpen
      case 1: return Users
      case 2: return MessageCircle
      default: return Award
    }
  }

  return (
    <SectionCard 
      title={title}
      icon={Award}
    >
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-start gap-3">
              <IconContainer 
                icon={getIconForIndex(index)} 
                variant="square"
                size="md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{skill.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{skill.description}</p>
                <div className="flex flex-wrap gap-1">
                  {skill.details.map((detail, detailIndex) => (
                    <SkillBadge key={detailIndex}>
                      {detail}
                    </SkillBadge>
                  ))}
                </div>
              </div>
            </div>
            {index !== skills.length - 1 && <Separator className="bg-blue-500/20" />}
          </div>
        ))}
      </div>
    </SectionCard>
  )
} 