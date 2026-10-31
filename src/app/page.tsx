import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getSortedPostsData().slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Finanças do Dia
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
            Economia do dia a dia, como guardar dinheiro e ferramentas práticas para organizar sua vida financeira.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ferramentas"
              className="inline-block bg-white text-emerald-800 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Usar ferramentas
            </Link>
            <Link
              href="/blog"
              className="inline-block border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Ver artigos
            </Link>
          </div>
        </div>
      </section>

      {/* Ferramentas em destaque */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ferramentas gratuitas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/ferramentas" className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow text-center">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-gray-900 text-sm">Orçamento 50/30/20</h3>
          </Link>
          <Link href="/ferramentas" className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow text-center">
            <div className="text-2xl mb-2">🛡️</div>
            <h3 className="font-semibold text-gray-900 text-sm">Reserva de Emergência</h3>
          </Link>
          <Link href="/ferramentas" className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-gray-900 text-sm">Meta de Poupança</h3>
          </Link>
          <Link href="/ferramentas" className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow text-center">
            <div className="text-2xl mb-2">📈</div>
            <h3 className="font-semibold text-gray-900 text-sm">Juros Compostos</h3>
          </Link>
        </div>
      </section>

      {/* Posts recentes */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Artigos recentes</h2>
            <Link href="/blog" className="text-emerald-700 font-medium text-sm hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
