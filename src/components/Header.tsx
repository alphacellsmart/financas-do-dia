import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-emerald-700 text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:opacity-90">
          Finanças do Dia
        </Link>
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Início
          </Link>
          <Link href="/blog" className="hover:underline">
            Artigos
          </Link>
          <Link href="/sobre" className="hover:underline">
            Sobre
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
