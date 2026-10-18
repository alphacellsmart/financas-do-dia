import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getSortedPostsData().slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Finanças do Dia
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Economia do dia a dia e como guardar dinheiro de forma simples, prática e sem complicação.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-white text-emerald-800 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            Ver todos os artigos
          </Link>
        </div>
      </section>

      {/* Posts recentes */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Artigos recentes</h2>
          <Link href="/blog" className="text-emerald-700 font-medium text-sm hover:underline">
            Ver todos →
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            Nenhum artigo publicado ainda. Em breve teremos conteúdo novo!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        )}
      </section>

      {/* Categorias */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore por assunto</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-1">Poupança</h3>
              <p className="text-sm text-gray-500">Como guardar dinheiro de forma consistente</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-1">Orçamento</h3>
              <p className="text-sm text-gray-500">Organize seus gastos de maneira simples</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-1">Reserva</h3>
              <p className="text-sm text-gray-500">Monte sua reserva de emergência</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-5xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Quer organizar suas finanças?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Aprenda a controlar gastos, criar reservas e construir uma vida financeira mais tranquila com conteúdos práticos e diretos.
          </p>
          <Link
            href="/sobre"
            className="inline-block bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors"
          >
            Conheça o blog
          </Link>
        </div>
      </section>
    </div>
  );
}
