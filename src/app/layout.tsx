import type { Metadata } from "next";
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
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
