"use client"

import { useLocale } from "./use-locale"
import { translations } from "@/locales"

export function useTranslations() {
  const { locale } = useLocale()
  return translations[locale]
}
