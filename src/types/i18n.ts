/**
 * Tipos relacionados à internacionalização do projeto
 */

/** 
 * Idiomas suportados pelo projeto
 */
export const locales = ["en", "ptBR", "es"] as const

/** 
 * Tipo de idioma válido 
 */
export type Locale = (typeof locales)[number]

/** 
 * Nomes completos dos idiomas
 */
export const localeNames = {
  en: "English",
  ptBR: "Português",
  es: "Español",
} as const

/** 
 * Bandeiras representativas dos idiomas
 */
export const localeFlags = {
  en: "🇺🇸",
  ptBR: "🇧🇷",
  es: "🇪🇸",
} as const

/** 
 * Locale padrão quando nenhum é especificado
 */
export const defaultLocale: Locale = "ptBR" 