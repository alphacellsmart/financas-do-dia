import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Todos os artigos sobre economia do dia a dia e como guardar dinheiro.",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Artigos</h1>
      <p className="text-gray-600 mb-10">
        Dicas práticas para economizar, organizar o orçamento e guardar dinheiro.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-500 text-center py-12">
          Nenhum artigo publicado ainda.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      )}
    </div>
  );
}
