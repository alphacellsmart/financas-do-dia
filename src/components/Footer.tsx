import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Finanças do Dia</h3>
            <p className="text-sm leading-relaxed">
              Dicas práticas de economia do dia a dia e como guardar dinheiro de forma simples e eficiente.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidade" className="hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Contato: infelixmonster@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Finanças do Dia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
