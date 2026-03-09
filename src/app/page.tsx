import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { issues } from "@/data/issues";

export default function HomePage() {
  const latestIssue = issues[0];
  const featuredArticles = latestIssue.articles.filter((a) => a.featured);
  const otherArticles = latestIssue.articles.filter((a) => !a.featured);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Issue info */}
        <div className="mb-8 border-b border-ink/10 pb-6">
          <p className="text-sm font-medium text-ink-muted">
            {latestIssue.date} 발행 · 제 {latestIssue.number}호
          </p>
          <h1 className="mt-1 font-headline text-2xl sm:text-3xl font-bold text-ink">
            {latestIssue.title}
          </h1>
        </div>

        {/* Featured articles - 2 column grid on desktop */}
        <section className="mb-12">
          <h2 className="sr-only">주요 기사</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="featured" />
            ))}
          </div>
        </section>

        {/* Other articles list */}
        <section>
          <h2 className="mb-4 font-headline text-lg font-semibold text-ink">
            더 많은 기사
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
