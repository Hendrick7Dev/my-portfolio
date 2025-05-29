"use client"

import { useScopedI18n } from "@/hooks/use-scoped-i18n"
import { LanguageSelector } from "@/components/language-selector"

/**
 * Wrapper para componentes que precisam de interatividade do cliente
 * 
 * Este componente agrupa todas as partes interativas em um único componente cliente,
 * permitindo que o restante da página seja renderizado no servidor.
 */
export function ClientWrapper() {
  const t = useScopedI18n()
  const header = t('header')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-500/30 bg-black/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <span className="text-white font-bold">LH</span>
          </div>
        </div>
        <div className="flex-1 flex justify-end gap-1 sm:gap-2">
          <a 
            href="#" 
            className="inline-flex items-center px-3 py-1.5 text-sm text-blue-400 hover:text-blue-300"
          >
            {header.downloadCV}
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-sm text-blue-400 hover:text-blue-300"
          >
            {header.github}
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center px-3 py-1.5 text-sm text-blue-400 hover:text-blue-300"
          >
            {header.linkedin}
          </a>
          <div className="ml-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  )
} 