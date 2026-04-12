import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Weberson Rodrigues",
  description: "Desenvolvedor com foco em backend — TypeScript, NestJS, REST APIs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
