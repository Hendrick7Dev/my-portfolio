"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages, ChevronDown } from "lucide-react"
import { Locale, localeNames, localeFlags } from "@/locales"
import { useLocale } from "@/providers/locale-provider"

/**
 * Componente de seleção de idioma
 * Permite ao usuário trocar o idioma da aplicação
 */
export function LanguageSelector() {
  const { locale, changeLocale } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
          <Languages className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{localeFlags[locale]}</span>
          <span className="sm:ml-1">{locale.toUpperCase()}</span>
          <ChevronDown className="w-3 h-3 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/95 backdrop-blur-xl border border-blue-500/30">
        {Object.keys(localeNames).map((loc) => (
          <DropdownMenuItem
            key={loc}
            className={`text-white hover:bg-blue-500/20 hover:text-white focus:bg-blue-500/20 focus:text-white cursor-pointer transition-colors duration-200 ${
              locale === loc ? 'bg-blue-500/20' : ''
            }`}
            onClick={() => changeLocale(loc as Locale)}
          >
            <span className="mr-3 text-lg">{localeFlags[loc as Locale]}</span>
            {localeNames[loc as Locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 