import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { issues } from "@/data/issues";

export default function ArchivePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8">
          <h1 className="font-headline text-2xl sm:text-3xl font-bold text-ink">
            과월호
          </h1>
          <p className="mt-2 text-ink-muted">
            지난 호를 선택해 기사를 읽어보세요
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue) => (
            <Link
              key={issue.id}
              href={`/issue/${issue.id}`}
              className="group block rounded-lg border border-ink/10 bg-paper-warm p-6 transition-all hover:border-ink/20 hover:shadow-md"
            >
              <p className="text-sm font-medium text-ink-muted">
                {issue.date} 발행
              </p>
              <h2 className="mt-2 font-headline text-xl font-bold text-ink group-hover:text-[#c41e3a] transition-colors">
                제 {issue.number}호 · {issue.title}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                기사 {issue.articles.length}건
              </p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
