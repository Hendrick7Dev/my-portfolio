import ptBR from './lang/ptBR'
import en from './lang/en'
import es from './lang/es'

// Tipo auxiliar para arrays que podem ser readonly ou mutable
export type ReadonlyOrMutable<T> = readonly T[] | T[]

export interface Dictionary {
  common: {
    language: string
    changeLanguage: string
    darkMode: string
    lightMode: string
    systemMode: string
  }
  header: {
    downloadCV: string
    github: string
    linkedin: string
    portfolio: string
  }
  sections: {
    experience: string
    projects: string
    skills: string
    additionalSkills: string
    education: string
    languages: string
  }
  labels: {
    liveDemo: string
    code: string
    keyAchievements: string
    location: string
    email: string
    phone: string
  }
  footer: {
    copyright: string
    tagline: string
  }
}

export type Locale = 'ptBR' | 'en' | 'es'

// Mapeia os locales para seus nomes completos
export const localeNames: Record<Locale, string> = {
  ptBR: 'Português',
  en: 'English',
  es: 'Español'
}

// Emojis de bandeiras para cada locale
export const localeFlags: Record<Locale, string> = {
  ptBR: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸'
}

// Idiomas disponíveis
export const locales: Locale[] = ['ptBR', 'en', 'es']

// Dicionário com todos os idiomas
export const dictionaries: Record<Locale, Dictionary> = {
  ptBR,
  en,
  es
} 