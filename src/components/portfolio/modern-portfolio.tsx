"use client"

import { PortfolioHeader } from "../portfolio-header"
import { HeroSection } from "./hero-section"
import { ExperienceSection } from "./experience-section"
import { ProjectsSection } from "./projects-section"
import { SkillsCard, AdditionalSkillsCard, EducationCard, LanguagesCard } from "@/ui/portfolio"
import { PortfolioFooter } from "./portfolio-footer"
import { useTranslations } from "@/hooks/use-translations"
import { Code, Database, Monitor, Cloud, GitBranch } from "lucide-react"
import { type Project, type ReadonlyOrMutable } from "@/types/portfolio"

/**
 * Componente principal do portfólio
 * Organiza e renderiza todos os componentes em uma estrutura responsiva
 */
export default function ModernPortfolio() {
  // Obter as traduções do idioma atual
  const t = useTranslations()
  
  // Habilidades técnicas com seus ícones
  const technicalSkills = [
    { name: "React", icon: Code, level: 85 },
    { name: "Next.js", icon: Monitor, level: 80 },
    { name: "TypeScript", icon: Code, level: 75 },
    { name: "Node.js", icon: Database, level: 70 },
    { name: "PostgreSQL", icon: Database, level: 65 },
    { name: "AWS", icon: Cloud, level: 60 },
    { name: "Docker", icon: Cloud, level: 55 },
    { name: "Git", icon: GitBranch, level: 90 },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <PortfolioHeader />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-800/10 to-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-700/5 to-blue-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Hero Section */}
        <HeroSection />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <ExperienceSection 
              title={t.sections.experience}
              experiences={t.experience as ReadonlyOrMutable<typeof t.experience[0]>}
            />
            <ProjectsSection 
              title={t.sections.projects}
              projects={t.projects as unknown as Project[]}
              liveDemoLabel={t.buttons.liveDemo}
              codeLabel={t.buttons.code}
            />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <SkillsCard 
              title={t.sections.skills}
              skills={technicalSkills}
            />
            <AdditionalSkillsCard 
              title={t.sections.additional}
              skills={t.additionalSkills as ReadonlyOrMutable<typeof t.additionalSkills[0]>}
            />
            <EducationCard 
              title={t.sections.education}
              education={t.education as ReadonlyOrMutable<typeof t.education[0]>}
            />
            <LanguagesCard 
              title={t.sections.languages}
              languages={t.languageSkills as ReadonlyOrMutable<typeof t.languageSkills[0]>}
            />
          </div>
        </div>

        {/* Footer */}
        <PortfolioFooter 
          copyright={t.footer.copyright}
          tagline={t.footer.tagline}
        />
      </div>
    </div>
  )
} 