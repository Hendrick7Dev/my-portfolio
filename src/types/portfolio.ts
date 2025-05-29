import { LucideIcon } from "lucide-react"

/**
 * Tipos para as seções do portfólio
 */

/**
 * Informações de experiência profissional
 */
export interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: readonly string[] | string[]
}

/**
 * Informações de projeto
 */
export interface Project {
  title: string
  description: string
  tech: readonly string[] | string[]
  featured: boolean
}

/**
 * Informações de habilidade adicional
 */
export interface AdditionalSkill {
  title: string
  description: string
  details: readonly string[] | string[]
}

/**
 * Informações de educação
 */
export interface Education {
  title: string
  institution: string
  period: string
}

/**
 * Informações de idioma
 */
export interface LanguageSkill {
  name: string
  level: string
}

/**
 * Informações de habilidade técnica
 */
export interface TechnicalSkill {
  name: string
  icon?: LucideIcon | string
  level: number
}

/**
 * Tipo que permite arrays puros ou readonly arrays
 */
export type ReadonlyOrMutable<T> = readonly T[] | T[] 