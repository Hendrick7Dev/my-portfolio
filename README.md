# Portfólio Profissional

Um portfólio profissional moderno e responsivo desenvolvido com Next.js 15, TypeScript, React Server Components e Tailwind CSS.

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0-38B2AC)
![Licença](https://img.shields.io/badge/licença-MIT-green)

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Internacionalização](#-internacionalização)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Atualizações Recentes](#-atualizações-recentes)
- [Começando](#-começando)
- [Personalização](#-personalização)
- [Implantação](#-implantação)
- [Licença](#-licença)

## 🌟 Visão Geral

Este projeto é um portfólio profissional dinâmico com suporte a múltiplos idiomas, otimizado para performance e SEO. Utiliza os mais recentes recursos do Next.js 15, incluindo React Server Components para renderização eficiente no servidor e App Router para roteamento.

## ✨ Funcionalidades

- **Design Responsivo**: Layout adaptável para todos os tamanhos de tela
- **Internacionalização**: Suporte completo a 3 idiomas (Português, Inglês e Espanhol)
- **Otimização para SEO**: Metadados específicos para cada idioma
- **Tema Escuro**: Interface elegante com tema escuro e elementos visuais modernos
- **Arquitetura Moderna**: Separação clara entre componentes de servidor, cliente e UI pura
- **Performance Otimizada**: Renderização no servidor para carregamento rápido

## 🚀 Tecnologias

- **[Next.js 15](https://nextjs.org/)**: Framework React com suporte a SSR, SSG e RSC
- **[React 19](https://react.dev/)**: Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado de JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Framework CSS utilitário
- **[Lucide React](https://lucide.dev/)**: Conjunto de ícones para React
- **[Radix UI](https://www.radix-ui.com/)**: Componentes acessíveis e sem estilo

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura moderna baseada em:

- **App Router**: Estrutura de roteamento baseada em pastas do Next.js
- **React Server Components**: Componentes renderizados no servidor para melhor performance
- **Client Components**: Componentes interativos marcados com "use client"
- **UI Components**: Componentes puramente visuais, sem lógica de negócio
- **Middleware**: Redirecionamento baseado em idioma e detecção de preferências do usuário
- **Context API**: Gerenciamento de estado para idiomas e temas

## 🌐 Internacionalização

O sistema de internacionalização (i18n) foi implementado usando uma abordagem de "scopedI18n", que permite:

- **Carregamento Eficiente**: Cada componente solicita apenas as traduções que precisa
- **Suporte a Server Components**: Implementação compatível com RSC
- **Detecção de Idioma**: Detecção automática do idioma preferido do navegador
- **Troca de Idioma**: Interface para o usuário alterar o idioma em tempo real

### Idiomas Suportados

- 🇧🇷 Português (Brasil) - padrão
- 🇺🇸 Inglês (EUA)
- 🇪🇸 Espanhol

## 📁 Estrutura do Projeto

```
my-portfolio/
├── public/                # Arquivos estáticos
├── src/                   # Código fonte
│   ├── app/               # Estrutura de roteamento
│   │   ├── [locale]/      # Rotas com parâmetro de idioma
│   │   │   ├── page.tsx   # Página principal com locale
│   │   │   └── layout.tsx # Layout específico para locale
│   ├── components/        # Componentes React
│   │   ├── client/        # Componentes do cliente (interativos)
│   │   ├── server/        # Componentes do servidor (estáticos)
│   │   ├── portfolio/     # Componentes específicos do portfólio com lógica
│   │   └── ui/            # Componentes de UI básicos
│   ├── ui/                # Componentes UI puramente visuais
│   │   └── portfolio/     # Componentes visuais do portfólio 
│   ├── hooks/             # Hooks personalizados
│   │   ├── server-i18n.ts  # Hook para i18n no servidor
│   │   ├── use-scoped-i18n.ts # Hook para i18n no cliente
│   │   └── use-locale.ts  # Hook para gerenciar o idioma
│   ├── locales/           # Traduções e configuração de i18n
│   │   ├── index.ts       # Exportações e tipos
│   │   └── lang/          # Arquivos de idioma
│   │       ├── en.ts      # Traduções em inglês
│   │       ├── es.ts      # Traduções em espanhol
│   │       └── ptBR.ts    # Traduções em português
│   ├── providers/         # Providers de contexto
│   ├── types/             # Tipos TypeScript
│   └── middleware.ts      # Middleware para redirecionamento de idioma
```

## 🔄 Atualizações Recentes

### Refatoração da Estrutura de Componentes (Commit 2)

1. **Reorganização dos Componentes**:
   - Movidos componentes puramente visuais para `src/ui/portfolio/`
   - Mantidos componentes com lógica de negócio em `src/components/portfolio/`

2. **Consolidação de Componentes**:
   - Unificado `ProjectCard` e `ProjectItem` em um único componente flexível
   - O componente agora suporta modo interativo (cliente) e estático (servidor)

3. **Middleware Simplificado**:
   - Removida duplicação de middleware
   - Consolidada toda a lógica de redirecionamento baseada em idioma

4. **Correções de Tipagem**:
   - Padronização dos nomes de locales (`ptBR`, `en`, `es`)
   - Melhorias na tipagem de componentes

5. **Outros Ajustes**:
   - Criado barril de exportações para componentes UI
   - Implementadas funções de interação provisórias

## 🚦 Começando

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Hendrick7Dev/my-portfolio.git
cd my-portfolio

# Instale as dependências
npm install
# ou
yarn
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o projeto em execução.

## 🎨 Personalização

### Conteúdo

1. **Informações Pessoais**: Edite os dados do portfólio em `src/app/[locale]/page.tsx`
2. **Traduções**: Modifique os arquivos de idioma em `src/locales/lang/`
3. **Links**: Atualize os links de redes sociais em `src/components/client/client-wrapper.tsx`

### Estilo

1. **Cores**: Personalize o esquema de cores editando as classes Tailwind nos componentes
2. **Fontes**: Modifique as fontes em `tailwind.config.js`
3. **Layout**: Ajuste a estrutura de layout em `src/app/[locale]/page.tsx`

## 🚀 Implantação

O projeto está pronto para implantação em plataformas como Vercel, Netlify ou qualquer provedor que suporte Next.js.

```bash
# Construa para produção
npm run build
# ou
yarn build

# Inicie o servidor de produção
npm start
# ou
yarn start
```

## 📄 Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
