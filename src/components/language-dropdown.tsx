"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages, ChevronDown } from "lucide-react"
import { localeNames, localeFlags, type Locale } from "@/types/i18n"
import { useAppI18n } from "@/hooks/use-app-i18n"

export function LanguageDropdown() {
  const { locale, changeLocale } = useAppI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
          <Languages className="w-4 h-4 mr-2" />
          {locale.toUpperCase()}
          <ChevronDown className="w-3 h-3 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/95 backdrop-blur-xl border border-blue-500/30">
        {Object.keys(localeNames).map((loc) => (
          <DropdownMenuItem
            key={loc}
            className="text-white hover:bg-blue-500/20 hover:text-white focus:bg-blue-500/20 focus:text-white cursor-pointer transition-colors duration-200"
            onClick={() => changeLocale(loc as Locale)}
          >
            <span className="mr-3 text-lg">{localeFlags[loc as keyof typeof localeFlags]}</span>
            {localeNames[loc as keyof typeof localeNames]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
