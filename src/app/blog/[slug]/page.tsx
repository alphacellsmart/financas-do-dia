import { getPostData, getAllPostSlugs, getSortedPostsData } from "@/lib/posts";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostData(slug);
    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch {
    return {
      title: "Artigo não encontrado",
    };
  }
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostData(slug);
  } catch {
    notFound();
  }

  const formattedDate = format(new Date(post.date), "d 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  const readingTime = estimateReadingTime(post.contentHtml);
  const recentPosts = getSortedPostsData()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Conteúdo principal */}
        <article className="lg:col-span-2">
          <Link
            href="/blog"
            className="text-emerald-700 text-sm font-medium hover:underline mb-6 inline-block"
          >
            ← Voltar para artigos
          </Link>

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <time dateTime={post.date}>{formattedDate}</time>
              <span>·</span>
              <span>{readingTime} min de leitura</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div
            className="prose prose-emerald max-w-none prose-headings:font-bold prose-p:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="text-emerald-700 font-medium hover:underline"
            >
              ← Ver todos os artigos
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Posts recentes</h3>
              <ul className="space-y-4">
                {recentPosts.map((p) => (
                  <li key={p.slug} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-sm font-medium text-gray-800 hover:text-emerald-700 leading-snug block"
                    >
                      {p.title}
                    </Link>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {format(new Date(p.date), "d 'de' MMM yyyy", { locale: ptBR })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">Finanças do Dia</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Conteúdos práticos para ajudar você a cuidar melhor do seu dinheiro, organizar suas finanças e tomar decisões mais conscientes.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
