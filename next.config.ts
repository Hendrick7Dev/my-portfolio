import type { NextConfig } from "next";

/**
 * Configuração do Next.js para o projeto de portfólio
 * 
 * Inclui:
 * - Configuração de domínios de imagens permitidos
 * - Configuração para internacionalização com App Router
 * - Otimizações de compilação
 */
const nextConfig: NextConfig = {
  /* Permite imagens de domínios externos específicos */
  images: {
    domains: [
      'github.com',
      'raw.githubusercontent.com',
      'images.unsplash.com',
    ],
  },

  /* Configurações para otimização */
  reactStrictMode: true,
  
  /* 
   * No Next.js App Router, a internacionalização é configurada através
   * da estrutura de pastas. Não precisamos de configuração explícita
   * no next.config.ts como era necessário no Pages Router.
   * 
   * A estrutura atual já segue o padrão:
   * - app/[locale]/page.tsx: Páginas localizadas com parâmetro de idioma
   * - O middleware.ts trata redirecionamentos baseados no idioma
   */
};

export default nextConfig;
