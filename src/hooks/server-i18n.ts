import { Locale, Dictionary, dictionaries } from '@/locales'

/**
 * Função de utilidade para obter traduções com escopo para componentes servidor
 * Esta versão é especificamente para uso em componentes de servidor (não tem "use client")
 * 
 * @param locale Código do idioma
 * @returns Função que retorna as traduções do escopo
 */
export function getServerScopedI18n(locale: string) {
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