"use client"

import { type ThemeProviderProps } from "next-themes"

import { ThemeProvider as NextThemesProvider } from "next-themes"
/**
 * Provider de tema para a aplicação
 * Gerencia o tema (claro/escuro) usando next-themes
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
} 