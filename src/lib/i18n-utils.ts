import { dictionaries, type Locale } from "@/locales"

/**
 * Verifica se um locale fornecido é válido
 */
export const isValidLocale = (locale: string): locale is Locale => {
  return ['ptBR', 'en', 'es'].includes(locale as Locale)
}

/**
 * Obtém as traduções para um locale específico
 */
export const getTranslations = (locale: Locale) => {
  return dictionaries[locale]
}

/**
 * Obtém o locale da URL/pathname
 */
export const getLocaleFromPath = (pathname: string): Locale => {
  const segments = pathname.split('/')
  const locale = segments[1] as Locale
  
  return isValidLocale(locale) ? locale : 'ptBR'
}

/**
 * Obtém o caminho sem o locale
 */
export const getPathWithoutLocale = (pathname: string): string => {
  const segments = pathname.split('/')
  const locale = segments[1]
  
  if (isValidLocale(locale)) {
    // Remove o segmento do locale e une o resto
    return '/' + segments.slice(2).join('/')
  }
  
  return pathname
}

/**
 * Gera um objeto com URLs para todos os idiomas suportados
 */
export const getAlternateLinks = (pathname: string) => {
  const pathWithoutLocale = getPathWithoutLocale(pathname)
  const supportedLocales: Locale[] = ['ptBR', 'en', 'es']
  
  return supportedLocales.reduce((acc, locale) => {
    acc[locale] = `/${locale}${pathWithoutLocale}`
    return acc
  }, {} as Record<Locale, string>)
} 