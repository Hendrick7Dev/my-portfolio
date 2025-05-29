import { SectionCard } from "@/components/ui/portfolio"
import { IconContainer } from "@/components/ui/portfolio"
import { Database } from "lucide-react"
import { LucideIcon } from "lucide-react"

interface TechnicalSkill {
  name: string
  level: number
}

interface SkillsCardProps {
  title: string
  skills: Array<TechnicalSkill & { icon: LucideIcon }>
}

/**
 * Card de habilidades técnicas
 * 
 * Exibe habilidades técnicas com barras de progresso.
 * Este componente pode ser renderizado no servidor pois não possui interatividade.
 */
export function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <SectionCard
      title={title}
      icon={Database}
    >
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <IconContainer icon={skill.icon} size="sm" />
                <span className="font-medium text-white">{skill.name}</span>
              </div>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-900 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  )
} 