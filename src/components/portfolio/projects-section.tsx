"use client"

import { ProjectCard } from "@/ui/portfolio"
import { Project } from "@/types/portfolio"
import { ReactNode } from "react"

interface ProjectsSectionProps {
  title: string | ReactNode
  projects: Project[]
  liveDemoLabel: string
  codeLabel: string
  isInteractive?: boolean
}

/**
 * Seção de projetos
 * 
 * Componente unificado para exibir projetos, agnóstico quanto à origem dos dados.
 * Pode ser usado tanto em contexto de cliente quanto de servidor.
 * Recebe os projetos e os labels via props, sem fazer fetch direto.
 */
export function ProjectsSection({ 
  title, 
  projects, 
  liveDemoLabel, 
  codeLabel,
  isInteractive = true
}: ProjectsSectionProps) {
  
  /**
   * Abre a demonstração do projeto em uma nova aba
   * @param projectTitle Título do projeto a ser aberto
   */
  const handleProjectDemo = (projectTitle: string) => {
    alert(`Em breve: link da demo para ${projectTitle} será adicionado!`);
  }

  /**
   * Abre o repositório de código do projeto no GitHub
   * @param projectTitle Título do projeto a ser acessado
   */
  const handleProjectCode = (projectTitle: string) => {
    alert(`Em breve: link do repositório para ${projectTitle} será adicionado!`);
  }

  return (
    <section>
      {/* Renderiza o título, que pode ser uma string ou um elemento React */}
      {typeof title === 'string' ? (
        <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-4">
          <span className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center">
            💼
          </span>
          {title}
        </h2>
      ) : (
        title
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            liveDemo={liveDemoLabel}
            codeLabel={codeLabel}
            onDemoClick={handleProjectDemo}
            onCodeClick={handleProjectCode}
            isInteractive={isInteractive}
          />
        ))}
      </div>
    </section>
  )
} 