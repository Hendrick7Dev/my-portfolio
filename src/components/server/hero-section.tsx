import { SectionCard } from "@/components/ui/portfolio"
import { Mail, MapPin, Phone } from "lucide-react"
import { Locale } from "@/locales"
import { getServerScopedI18n } from "@/hooks/server-i18n"

/**
 * Propriedades para o HeroSection no servidor
 */
interface ServerHeroSectionProps {
  locale: Locale
  title: string
  subtitle: string
  intro: string
  location: string
  email: string
  phone: string
}

/**
 * Seção de hero (versão servidor)
 * 
 * Este componente pode ser renderizado no servidor, aumentando a performance.
 * Usa ServerSectionHeader em vez do SectionHeader interativo.
 */
export function ServerHeroSection({
  locale,
  title,
  subtitle,
  intro,
  location,
  email,
  phone
}: ServerHeroSectionProps) {
  const t = getServerScopedI18n(locale)
  const labels = t('labels')
  
  return (
    <section className="mb-16">
      <SectionCard contentOnly className="bg-black/70 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Avatar */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-800 flex items-center justify-center shrink-0 mx-auto md:mx-0">
            <span className="text-4xl font-bold text-white">LH</span>
          </div>
          
          {/* Hero content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300 text-center md:text-left mb-2">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 font-medium text-center md:text-left mb-4">
              {subtitle}
            </h2>
            <p className="text-gray-300 max-w-2xl text-center md:text-left">
              {intro}
            </p>
            
            {/* Contact info */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-white">{labels.location}:</span> {location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-white">{labels.email}:</span> {email}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-white">{labels.phone}:</span> {phone}
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  )
} 