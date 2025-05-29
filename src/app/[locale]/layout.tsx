import type { Metadata } from "next"
import { locales, Locale } from "@/locales"
import { LocaleProvider } from "@/providers/locale-provider"

// Títulos e descrições localizadas para SEO
const localizedMetadata = {
  ptBR: {
    title: "Portfólio | Lucas Henrique - Desenvolvedor Full Stack",
    description: "Portfólio profissional de Lucas Henrique, desenvolvedor Full Stack especializado em React, Next.js, TypeScript e Node.js."
  },
  en: {
    title: "Portfolio | Lucas Henrique - Full Stack Developer",
    description: "Professional portfolio of Lucas Henrique, a Full Stack developer specialized in React, Next.js, TypeScript, and Node.js."
  },
  es: {
    title: "Portafolio | Lucas Henrique - Desarrollador Full Stack",
    description: "Portafolio profesional de Lucas Henrique, desarrollador Full Stack especializado en React, Next.js, TypeScript y Node.js."
  }
}

// Gera metadados alternativos para outros idiomas
export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const locale = params.locale || 'ptBR'
  
  return {
    title: localizedMetadata[locale]?.title,
    description: localizedMetadata[locale]?.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': `/en`,
        'pt-BR': `/ptBR`,
        'es': `/es`,
      },
    },
  }
}

// Gerar rotas estáticas para todos os locales suportados
export function generateStaticParams() {
  return locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  return (
    <LocaleProvider initialLocale={params.locale}>
      {children}
    </LocaleProvider>
  )
} 