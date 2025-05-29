import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

/**
 * Fonte principal
 */
const inter = Inter({
  subsets: ["latin"],
});

/**
 * Metadados do site para SEO e compartilhamento social
 */
export const metadata: Metadata = {
  title: {
    template: '%s | My Portfolio',
    default: 'My Portfolio',
  },
  description: 'Professional portfolio showcasing my skills and projects',
  keywords: "desenvolvedor, portfolio, projetos, experiência, web development",
  authors: [{ name: "Lucas Henrique" }],
  creator: "Lucas Henrique",
};

/**
 * Layout raiz da aplicação
 * Aplica as fontes e estrutura base para todas as páginas
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
