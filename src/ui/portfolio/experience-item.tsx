import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Star } from "lucide-react"
import { ReadonlyOrMutable } from "@/locales"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: ReadonlyOrMutable<string>
}

interface ExperienceItemProps {
  experience: Experience
  keyAchievementsLabel?: string
}

/**
 * Item de experiência profissional
 * 
 * Exibe informações detalhadas sobre uma experiência profissional.
 * Este componente pode ser renderizado no servidor pois não possui interatividade.
 */
export function ExperienceItem({ experience, keyAchievementsLabel = "Key Achievements" }: ExperienceItemProps) {
  return (
    <Card className="border-0 shadow-xl bg-black/80 backdrop-blur-xl hover:bg-black/90 transition-all duration-300 border border-blue-500/30">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
            <p className="text-xl text-blue-400 font-medium mb-2">{experience.company}</p>
            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <Calendar className="w-4 h-4" />
              {experience.period}
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">{experience.description}</p>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                {keyAchievementsLabel}
              </h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 