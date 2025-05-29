"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export function HeroSection() {
  const t = useTranslations()

  return (
    <section className="mb-20">
      <Card className="border-0 shadow-2xl bg-black/90 backdrop-blur-xl overflow-hidden border border-blue-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10"></div>
        <CardContent className="relative p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-6xl font-bold text-blue-400">LH</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                {t.hero.title}
              </h1>
              <p className="text-2xl lg:text-3xl text-blue-400 mb-6 font-light">{t.hero.subtitle}</p>
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">{t.hero.description}</p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>{t.hero.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>{t.hero.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span>{t.hero.location}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 