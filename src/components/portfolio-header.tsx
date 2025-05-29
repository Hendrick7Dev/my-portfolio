"use client"

import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Globe, Monitor } from "lucide-react"
import { LanguageDropdown } from "./language-dropdown"
import { useTranslations } from "@/hooks/use-translations"

export function PortfolioHeader() {
  const t = useTranslations()

  /**
   * Inicia o download do CV em PDF
   * Implementar a lógica de download usando o File System ou um link direto
   */
  const handleDownloadCV = () => {
    // Implementação futura: usar URL direto para o arquivo do CV
    // const cvUrl = '/assets/cv.pdf';
    // const link = document.createElement('a');
    // link.href = cvUrl;
    // link.download = 'meu-curriculo.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  }

  /**
   * Abre o perfil do GitHub em uma nova aba
   * Necessário atualizar com o link correto do GitHub
   */
  const handleGitHub = () => {
    // Substituir com seu nome de usuário real do GitHub
    window.open("https://github.com/your-username", "_blank")
  }

  /**
   * Abre o perfil do LinkedIn em uma nova aba
   * Necessário atualizar com o link correto do LinkedIn
   */
  const handleLinkedIn = () => {
    // Substituir com seu perfil real do LinkedIn
    window.open("https://linkedin.com/in/your-profile", "_blank")
  }

  /**
   * Abre seu site de portfólio principal em uma nova aba
   * Necessário atualizar com o link correto
   */
  const handlePortfolio = () => {
    // Substituir com o URL real do seu portfólio
    window.open("https://your-portfolio.com", "_blank")
  }

  /**
   * Função para alternar a visibilidade do menu mobile
   * Será implementada quando o menu mobile for criado
   */
  const handleMobileMenu = () => {
    // A ser implementado com o menu mobile
    // Exemplo: setMobileMenuOpen(prev => !prev);
  }

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-blue-500/20">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-blue-400">LH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">{t.hero.title}</h1>
              <p className="text-sm text-blue-400">{t.header.title}</p>
            </div>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center gap-4">
            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium"
                onClick={handleDownloadCV}
              >
                <Download className="w-4 h-4 mr-2" />
                {t.header.downloadCV}
              </Button>
              <Button
                size="sm"
                className="bg-slate-700 hover:bg-slate-600 text-white font-medium"
                onClick={handleGitHub}
              >
                <Github className="w-4 h-4 mr-2" />
                {t.header.github}
              </Button>
              <Button
                size="sm"
                className="bg-slate-700 hover:bg-slate-600 text-white font-medium"
                onClick={handleLinkedIn}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                {t.header.linkedin}
              </Button>
              <Button
                size="sm"
                className="bg-slate-700 hover:bg-slate-600 text-white font-medium"
                onClick={handlePortfolio}
              >
                <Globe className="w-4 h-4 mr-2" />
                {t.header.portfolio}
              </Button>
            </div>

            {/* Language Dropdown */}
            <LanguageDropdown />

            {/* Mobile Menu Button - A implementar funcionalidade completa */}
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden border-blue-500/30 text-blue-400"
              onClick={handleMobileMenu}
            >
              <Monitor className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
