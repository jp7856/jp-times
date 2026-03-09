import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { issues } from "@/data/issues";

export default function ArticlePage({ params }: { params: { id: string } }) {
  const allArticles = issues.flatMap((i) => i.articles);
  const article = allArticles.find((a) => a.id === params.id);

  if (!article) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h1 className="font-headline text-2xl font-bold text-ink">기사를 찾을 수 없습니다</h1>
          <Link
            href="/"
            className="mt-4 inline-block text-ink-muted hover:text-ink underline"
          >
            홈으로 돌아가기
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <Header />
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link
          href="/"
          className="text-sm text-ink-muted hover:text-ink transition-colors"
        >
          ← 목록으로
        </Link>

        <header className="mt-6">
          <span className="text-sm font-medium text-ink-muted">{article.section}</span>
          <h1 className="mt-2 font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-ink-muted">
            <span>{article.author}</span>
            <time dateTime={article.publishedAt}>{formattedDate}</time>
          </div>
        </header>

        {article.imageUrl && (
          <figure className="mt-8 overflow-hidden rounded-lg">
            <div className="aspect-[16/9] relative">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </figure>
        )}

        <div className="mt-8">
          <p className="text-lg text-ink-light font-medium leading-relaxed">
            {article.summary}
          </p>
          <div className="mt-8 prose prose-lg max-w-none">
            {article.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-ink leading-relaxed mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
