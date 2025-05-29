"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { type Locale, defaultLocale, locales } from "@/types/i18n"

export function useLocale() {
  const router = useRouter()
  const pathname = usePathname()

  // Extract locale from pathname
  const getLocaleFromPath = (path: string): Locale => {
    const segments = path.split("/")
    const potentialLocale = segments[1] as Locale
    return locales.includes(potentialLocale) ? potentialLocale : defaultLocale
  }

  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      return getLocaleFromPath(pathname)
    }
    return defaultLocale
  })

  useEffect(() => {
    const currentLocale = getLocaleFromPath(pathname)
    setLocale(currentLocale)
  }, [pathname])

  const changeLocale = (newLocale: Locale) => {
    const segments = pathname.split("/")
    const currentLocale = getLocaleFromPath(pathname)

    if (currentLocale === defaultLocale) {
      // If current is default locale, add new locale prefix
      router.push(`/${newLocale}${pathname}`)
    } else {
      // Replace current locale with new one
      segments[1] = newLocale
      const newPath = segments.join("/")
      router.push(newPath)
    }
  }

  return { locale, changeLocale }
}
