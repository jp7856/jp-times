import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured";
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/article/${article.id}`}
        className="group block overflow-hidden rounded-lg border border-ink/10 bg-paper-warm transition-all hover:border-ink/20 hover:shadow-lg"
      >
        <div className="aspect-[16/9] relative overflow-hidden bg-ink/5">
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-headline font-bold text-ink/10">
                {article.section.slice(0, 1)}
              </span>
            </div>
          )}
          <span className="absolute top-3 left-3 rounded bg-ink px-2 py-1 text-xs font-medium text-paper">
            {article.section}
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-ink group-hover:text-[#c41e3a] transition-colors line-clamp-2">
            {article.title}
          </h2>
          <p className="mt-2 text-sm text-ink-muted line-clamp-2">
            {article.summary}
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-ink-muted">
            <span>{article.author}</span>
            <span>·</span>
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/article/${article.id}`}
      className="group block border-b border-ink/10 py-4 last:border-0 transition-colors hover:bg-paper-warm/50 -mx-2 px-2 rounded"
    >
      <span className="text-xs font-medium text-ink-muted">{article.section}</span>
      <h2 className="mt-1 font-headline text-lg font-semibold text-ink group-hover:text-[#c41e3a] transition-colors line-clamp-2">
        {article.title}
      </h2>
      <p className="mt-1 text-sm text-ink-muted line-clamp-2">{article.summary}</p>
      <div className="mt-2 flex items-center gap-2 text-xs text-ink-muted">
        <span>{article.author}</span>
        <span>·</span>
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      </div>
    </Link>
  );
}
