import { en } from "@/locales/en"
import { pt } from "@/locales/pt"
import { es } from "@/locales/es"
import { Locale } from "@/types/i18n"

/**
 * Obtém as traduções para um idioma específico para uso no servidor
 * @param locale O código do idioma
 * @returns Objeto com as traduções
 */
export function getTranslations(locale: string) {
  // Verifica se o locale é válido, senão usa inglês
  const validLocale = ['en', 'pt', 'es'].includes(locale) ? locale as Locale : 'en'
  
  // Retorna as traduções para o idioma especificado
  switch (validLocale) {
    case 'pt':
      return pt
    case 'es':
      return es
    case 'en':
    default:
      return en
  }
} 