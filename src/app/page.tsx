import { redirect } from 'next/navigation'
import { defaultLocale } from '@/types/i18n'

// Redireciona para a versão localizada da página inicial
export default function Home() {
  redirect(`/${defaultLocale}`)
}
