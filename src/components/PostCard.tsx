import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type PostCardProps = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
};

export default function PostCard({ slug, title, date, excerpt, category }: PostCardProps) {
  const formattedDate = format(new Date(date), "d 'de' MMMM 'de' yyyy", {
    locale: ptBR,
  });

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full text-xs font-medium">
            {category}
          </span>
          <time dateTime={date}>{formattedDate}</time>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
          <Link href={`/blog/${slug}`} className="hover:text-emerald-700 transition-colors">
            {title}
          </Link>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-block mt-4 text-emerald-700 font-medium text-sm hover:underline"
        >
          Ler artigo →
        </Link>
      </div>
    </article>
  );
}
