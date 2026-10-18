import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Finanças do Dia | Economia e como guardar dinheiro",
    template: "%s | Finanças do Dia",
  },
  description:
    "Dicas práticas de economia do dia a dia, como guardar dinheiro, organizar o orçamento e conquistar estabilidade financeira.",
  keywords: [
    "economia",
    "guardar dinheiro",
    "finanças pessoais",
    "orçamento",
    "poupança",
    "dicas financeiras",
  ],
  authors: [{ name: "Finanças do Dia" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Finanças do Dia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6620506373608826"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
