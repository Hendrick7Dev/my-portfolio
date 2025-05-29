"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillBadge } from "@/components/ui/portfolio/skill-badge"
import { ExternalLink, Github, Star } from "lucide-react"
import { Project } from "@/types/portfolio"

interface ProjectCardProps {
  project: Project
  liveDemo: string
  codeLabel: string
  onDemoClick?: (title: string) => void
  onCodeClick?: (title: string) => void
  isInteractive?: boolean
}

/**
 * Card de projeto
 * 
 * Exibe informações detalhadas sobre um projeto.
 * Pode ser usado tanto em componentes servidor quanto cliente.
 * Quando isInteractive=true, renderiza botões interativos (client component).
 * Quando isInteractive=false, renderiza links estáticos (server component).
 */
export function ProjectCard({ 
  project, 
  liveDemo, 
  codeLabel,
  onDemoClick, 
  onCodeClick,
  isInteractive = false
}: ProjectCardProps) {
  
  // Funções para interatividade em modo cliente
  const handleDemoClick = () => {
    if (onDemoClick) {
      onDemoClick(project.title);
    } else {
      alert("Em breve: link da demo será adicionado!");
    }
  };

  const handleCodeClick = () => {
    if (onCodeClick) {
      onCodeClick(project.title);
    } else {
      alert("Em breve: link do código será adicionado!");
    }
  };

  // Renderização com base no modo (interativo ou estático)
  if (isInteractive) {
    return (
      <Card
        className={`border-0 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 ${
          project.featured ? "bg-black/80 ring-1 ring-blue-500/50" : "bg-black/70 border border-blue-500/20"
        }`}
      >
        {project.featured && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
            <Star className="w-3 h-3 text-white" />
          </div>
        )}
        <CardHeader className="pb-4">
          <CardTitle className="text-xl text-white">{project.title}</CardTitle>
          <CardDescription className="text-gray-300 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <SkillBadge key={techIndex}>
                {tech}
              </SkillBadge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button
              size="sm"
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium"
              onClick={handleDemoClick}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {liveDemo}
            </Button>
            <Button
              size="sm"
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium"
              onClick={handleCodeClick}
            >
              <Github className="w-4 h-4 mr-2" />
              {codeLabel}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    // Versão do servidor (sem interatividade)
    return (
      <Card className={`border-0 shadow-xl bg-black/80 backdrop-blur-xl hover:bg-black/90 transition-all duration-300 border ${project.featured ? 'border-blue-500' : 'border-blue-500/30'}`}>
        <CardContent className="p-6">
          <div className="flex flex-col h-full">
            <div>
              {project.featured && (
                <div className="mb-2 inline-block px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-md">
                  Featured
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            </div>
            
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-2 py-1 text-xs bg-slate-800 text-gray-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <a 
                  href="#" 
                  className="text-xs px-3 py-1.5 bg-blue-500/20 text-blue-400 rounded-md hover:bg-blue-500/30 transition-colors"
                >
                  {liveDemo}
                </a>
                <a 
                  href="#" 
                  className="text-xs px-3 py-1.5 bg-slate-800 text-gray-300 rounded-md hover:bg-slate-700 transition-colors"
                >
                  {codeLabel}
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
} 