import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { issues } from "@/data/issues";

export default function IssuePage({ params }: { params: { id: string } }) {
  const issue = issues.find((i) => i.id === params.id);

  if (!issue) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="font-headline text-2xl font-bold text-ink">
            해당 호를 찾을 수 없습니다
          </h1>
        </main>
        <Footer />
      </>
    );
  }

  const featuredArticles = issue.articles.filter((a) => a.featured);
  const otherArticles = issue.articles.filter((a) => !a.featured);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8 border-b border-ink/10 pb-6">
          <p className="text-sm font-medium text-ink-muted">
            {issue.date} 발행 · 제 {issue.number}호
          </p>
          <h1 className="mt-1 font-headline text-2xl sm:text-3xl font-bold text-ink">
            {issue.title}
          </h1>
        </div>

        <section className="mb-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-headline text-lg font-semibold text-ink">
            기사 목록
          </h2>
          <div className="divide-y divide-ink/5">
            {otherArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
