import { NextRequest, NextResponse } from 'next/server'
import { locales, Locale } from '@/locales'

/**
 * Expressão regular para verificar se o caminho começa com um locale
 */
const LOCALE_REGEX = new RegExp(`^/(${locales.join('|')})/?.*$`)

/**
 * Mapeia os códigos de idioma do Accept-Language para os locales suportados
 */
const LOCALE_MAP: Record<string, Locale> = {
  'pt': 'ptBR',
  'pt-BR': 'ptBR',
  'en': 'en',
  'en-US': 'en',
  'es': 'es',
  'es-ES': 'es'
}

/**
 * Detecta o idioma preferido do navegador
 * Retorna o locale correspondente ou o locale padrão
 */
function getPreferredLocale(request: NextRequest): Locale {
  // Valor padrão
  const defaultLocale: Locale = 'ptBR'
  
  // Obter o cabeçalho Accept-Language
  const acceptLanguage = request.headers.get('Accept-Language')
  if (!acceptLanguage) return defaultLocale
  
  // Obter o idioma preferido
  const browserLocales = acceptLanguage.split(',')
    .map(item => item.split(';')[0].trim())
  
  // Encontrar o primeiro idioma suportado
  for (const browserLocale of browserLocales) {
    const locale = LOCALE_MAP[browserLocale]
    if (locale) return locale
    
    // Tentar com o código do idioma básico (ex: 'en-GB' -> 'en')
    const basicLocale = browserLocale.split('-')[0]
    const mappedLocale = LOCALE_MAP[basicLocale]
    if (mappedLocale) return mappedLocale
  }
  
  return defaultLocale
}

/**
 * Middleware para roteamento baseado em idiomas
 * Redireciona para o idioma preferido ou padrão quando o usuário acessa a raiz
 * Ou quando o idioma na URL não está entre os suportados
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Ignorar recursos estáticos, API, etc.
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Se o caminho já começa com um locale válido, não faz nada
  if (LOCALE_REGEX.test(pathname)) {
    return NextResponse.next()
  }

  // Detectar locale preferido do navegador
  const preferredLocale = getPreferredLocale(request)
  
  // Redirecionar para o idioma preferido ou padrão
  return NextResponse.redirect(
    new URL(`/${preferredLocale}${pathname === '/' ? '' : pathname}`, request.url)
  )
}

/**
 * Configuração para o middleware
 * Define em quais caminhos o middleware deve ser executado
 */
export const config = {
  // Executa o middleware em todas as páginas
  matcher: [
    // Aplica para todas as requisições excepto as que:
    // - Já têm um locale válido
    // - Acessam arquivos estáticos
    // - Acessam APIs
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
