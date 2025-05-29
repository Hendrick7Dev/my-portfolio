"use client"

import { usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"
import { type Locale } from "@/types/i18n"
import { 
  getLocaleFromPath, 
  getPathWithoutLocale, 
  getTranslations,
  getAlternateLinks
} from "@/lib/i18n-utils"

/**
 * Hook para trabalhar com internacionalização no App Router
 * 
 * Fornece:
 * - Locale atual
 * - Traduções
 * - Função para mudar de idioma
 * - Links alternativos para outros idiomas
 */
export function useAppI18n() {
  const pathname = usePathname()
  const router = useRouter()
  
  // Obtém o locale atual da URL
  const locale = useMemo(() => 
    getLocaleFromPath(pathname), 
    [pathname]
  )
  
  // Obtém as traduções para o locale atual
  const t = useMemo(() => 
    getTranslations(locale), 
    [locale]
  )
  
  // Gera links para os outros idiomas
  const alternateLinks = useMemo(() => 
    getAlternateLinks(pathname), 
    [pathname]
  )
  
  // Função para mudar de idioma mantendo o caminho atual
  const changeLocale = (newLocale: Locale) => {
    const currentPath = pathname
    const pathWithoutLocale = getPathWithoutLocale(currentPath)
    
    // Construir novo caminho com o novo locale
    const newPath = `/${newLocale}${pathWithoutLocale}`
    
    // Navegar para o novo caminho
    router.push(newPath)
  }
  
  return {
    locale,
    t,
    alternateLinks,
    changeLocale
  }
} 