import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-emerald-800 tracking-tight">
          Finanças do Dia
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-emerald-700 transition-colors">
            Início
          </Link>
          <Link href="/blog" className="hover:text-emerald-700 transition-colors">
            Artigos
          </Link>
          <Link href="/ferramentas" className="hover:text-emerald-700 transition-colors">
            Ferramentas
          </Link>
          <Link href="/sobre" className="hover:text-emerald-700 transition-colors">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-emerald-700 transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
