import { Separator } from "@/components/ui/separator"
import { SectionCard } from "@/components/ui/portfolio"
import { BookOpen, Calendar } from "lucide-react"
import { ReadonlyOrMutable } from "@/locales"

interface Education {
  title: string
  institution: string
  period: string
}

interface EducationCardProps {
  title: string
  education: ReadonlyOrMutable<Education>
}

/**
 * Card de educação e certificações
 * 
 * Exibe formação acadêmica e certificações profissionais.
 * Este componente pode ser renderizado no servidor pois não possui interatividade.
 */
export function EducationCard({ title, education }: EducationCardProps) {
  return (
    <SectionCard 
      title={title}
      icon={BookOpen}
    >
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-semibold text-white">{edu.title}</h3>
            <p className="text-blue-400 font-medium">{edu.institution}</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              {edu.period}
            </div>
            {index !== education.length - 1 && <Separator className="bg-blue-500/20 mt-6" />}
          </div>
        ))}
      </div>
    </SectionCard>
  )
} 