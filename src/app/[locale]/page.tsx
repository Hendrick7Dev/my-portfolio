import { ClientWrapper } from "@/components/client/client-wrapper"
import { ServerHeroSection } from "@/components/server/hero-section"
import { ServerExperienceSection } from "@/components/server/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { SkillsCard, AdditionalSkillsCard, EducationCard, LanguagesCard } from "@/ui/portfolio"
import { PortfolioFooter } from "@/components/portfolio/portfolio-footer"
import { Code, Database, Monitor, Cloud, GitBranch } from "lucide-react"
import { getServerScopedI18n } from "@/hooks/server-i18n"
import { Locale } from "@/locales"

// Simulação de dados - normalmente estes viriam de um CMS ou API
const portfolioData = {
  hero: {
    title: "Lucas Henrique",
    subtitle: "Desenvolvedor Full Stack",
    intro: "Desenvolvedor apaixonado por criar soluções web modernas e escaláveis. Especializado em React, Next.js, Node.js e TypeScript.",
    location: "São Paulo, Brasil",
    email: "lucas.dev@exemplo.com",
    phone: "+55 (11) 98765-4321",
  },
  experiences: [
    {
      title: "Desenvolvedor Junior",
      company: "TechStart Solutions",
      period: "2023 - Presente",
      description: "Desenvolvimento de aplicações web usando React e Next.js. Contribuindo para projetos em equipe e aprendendo práticas modernas de desenvolvimento enquanto mantenho padrões de qualidade de código.",
      achievements: [
        "Implementou uma nova arquitetura de componentes que reduziu o tempo de carregamento das páginas em 40%",
        "Desenvolveu um sistema de design com TypeScript que melhorou a consistência da UI em 5 produtos",
        "Participou da migração de uma aplicação legada para Next.js, melhorando o SEO e a performance",
        "Implementou testes automatizados que aumentaram a cobertura de código para mais de 80%"
      ]
    }
  ],
  projects: [
    {
      title: "Plataforma E-learning",
      description: "Plataforma educacional para cursos de inglês online com lições interativas e acompanhamento de progresso",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC"],
      featured: true
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard para visualização de dados de marketing digital com múltiplos tipos de gráficos e filtros avançados",
      tech: ["Next.js", "TypeScript", "D3.js", "Prisma", "PostgreSQL"],
      featured: false
    },
    {
      title: "App de Finanças Pessoais",
      description: "Aplicativo para controle de finanças pessoais com categorização automática e relatórios detalhados",
      tech: ["React Native", "Redux", "Firebase", "Cloud Functions"],
      featured: false
    },
    {
      title: "Sistema de Gestão de Tarefas",
      description: "Sistema colaborativo para gestão de tarefas com kanban, prazos e integração com calendário",
      tech: ["Vue.js", "Express", "MongoDB", "Docker"],
      featured: false
    }
  ],
  technicalSkills: [
    { name: "React", icon: Code, level: 85 },
    { name: "Next.js", icon: Monitor, level: 80 },
    { name: "TypeScript", icon: Code, level: 75 },
    { name: "Node.js", icon: Database, level: 70 },
    { name: "PostgreSQL", icon: Database, level: 65 },
    { name: "AWS", icon: Cloud, level: 60 },
    { name: "Docker", icon: Cloud, level: 55 },
    { name: "Git", icon: GitBranch, level: 90 },
  ],
  additionalSkills: [
    {
      title: "Ensino de Inglês",
      description: "Instrutor certificado de inglês com mais de 2 anos de experiência ensinando conceitos de programação em inglês",
      details: ["TESOL", "Fluente", "Ensino Técnico", "Criação de Conteúdo"]
    },
    {
      title: "Trabalho em Equipe",
      description: "Experiência em trabalhar com equipes multidisciplinares em projetos ágeis",
      details: ["Scrum", "Kanban", "Pair Programming", "Code Review"]
    },
    {
      title: "Comunicação",
      description: "Habilidade de comunicar conceitos técnicos complexos de forma clara e acessível",
      details: ["Documentação", "Apresentações", "Mentoria", "Workshops"]
    }
  ],
  education: [
    {
      title: "Ciência da Computação",
      institution: "Universidade de São Paulo",
      period: "2020 - 2024"
    },
    {
      title: "Certificação TESOL",
      institution: "Instituto Internacional TESOL",
      period: "2022"
    },
    {
      title: "AWS Certified Developer",
      institution: "Amazon Web Services",
      period: "2023"
    }
  ],
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Fluente" },
    { name: "Espanhol", level: "Intermediário" }
  ]
}

export default async function Home({ params }: { params: { locale: Locale } }) {
  const t = getServerScopedI18n(params.locale)
  const sections = t('sections')
  const labels = t('labels')
  const footer = t('footer')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header (cliente) */}
      <ClientWrapper />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-800/10 to-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-700/5 to-blue-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-7xl">
        {/* Hero Section (servidor) */}
        <ServerHeroSection 
          locale={params.locale}
          title={portfolioData.hero.title}
          subtitle={portfolioData.hero.subtitle}
          intro={portfolioData.hero.intro}
          location={portfolioData.hero.location}
          email={portfolioData.hero.email}
          phone={portfolioData.hero.phone}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Experience Section (servidor) */}
            <ServerExperienceSection 
              locale={params.locale}
              experiences={portfolioData.experiences} 
            />
            
            {/* Projects Section */}
            <ProjectsSection 
              title={sections.projects}
              projects={portfolioData.projects}
              liveDemoLabel={labels.liveDemo}
              codeLabel={labels.code}
              isInteractive={false} // Renderização estática para server component
            />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <SkillsCard 
              title={sections.skills}
              skills={portfolioData.technicalSkills}
            />
            <AdditionalSkillsCard 
              title={sections.additionalSkills}
              skills={portfolioData.additionalSkills}
            />
            <EducationCard 
              title={sections.education}
              education={portfolioData.education}
            />
            <LanguagesCard 
              title={sections.languages}
              languages={portfolioData.languages}
            />
          </div>
        </div>

        {/* Footer */}
        <PortfolioFooter 
          copyright={footer.copyright}
          tagline={footer.tagline}
        />
      </div>
    </div>
  )
}
