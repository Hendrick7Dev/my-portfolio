"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Locale, locales } from '@/locales'

interface LocaleContextType {
  locale: Locale
  changeLocale: (newLocale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | null>(null)

interface LocaleProviderProps {
  children: ReactNode
  initialLocale?: Locale
}

/**
 * Provider de idiomas para a aplicação
 * Gerencia o idioma atual e fornece uma função para alterá-lo
 */
export function LocaleProvider({ 
  children, 
  initialLocale = 'ptBR' 
}: LocaleProviderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [locale, setLocale] = useState<Locale>(
    (pathname.split('/')[1] as Locale) || initialLocale
  )

  /**
   * Altera o idioma da aplicação
   * @param newLocale Novo idioma
   */
  const changeLocale = (newLocale: Locale) => {
    if (!locales.includes(newLocale)) return
    
    // Obtém o caminho atual sem o locale
    const currentPath = pathname.split('/').slice(2).join('/') || ''
    
    // Navega para o mesmo caminho com o novo locale
    router.push(`/${newLocale}/${currentPath}`)
    setLocale(newLocale)
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

/**
 * Hook para acessar o contexto de idiomas
 * @returns Objeto com o idioma atual e função para alterá-lo
 */
export function useLocale() {
  const context = useContext(LocaleContext)
  
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  
  return context
} 