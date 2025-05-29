"use client"

import { useCallback } from 'react'
import { Locale, Dictionary } from '@/locales'
import { usePathname } from 'next/navigation'
import { dictionaries } from '@/locales'

/**
 * Hook para obter a função de tradução com escopo para componentes cliente
 * @returns A função de tradução com escopo
 */
export function useScopedI18n() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] as Locale || 'ptBR'
  const dictionary = dictionaries[locale] || dictionaries.ptBR

  /**
   * Obtém as traduções para um escopo específico
   * @param scope Escopo das traduções (e.g., 'common', 'hero', etc.)
   * @returns Objeto com as traduções do escopo
   */
  const getScopedTranslations = useCallback(<K extends keyof Dictionary>(scope: K) => {
    return dictionary[scope]
  }, [dictionary])

  return getScopedTranslations
}

/**
 * Função de utilidade para obter traduções com escopo para componentes servidor
 * @param locale Código do idioma
 * @returns Função que retorna as traduções do escopo
 */
export function getScopedI18n(locale: string) {
  const validLocale = (Object.keys(dictionaries).includes(locale) 
    ? locale 
    : 'ptBR') as Locale
  
  const dictionary = dictionaries[validLocale]
  
  /**
   * Obtém as traduções para um escopo específico
   * @param scope Escopo das traduções (e.g., 'common', 'hero', etc.)
   * @returns Objeto com as traduções do escopo
   */
  return function scopedTranslations<K extends keyof Dictionary>(scope: K) {
    return dictionary[scope]
  }
} 