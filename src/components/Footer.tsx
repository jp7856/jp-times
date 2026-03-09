import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-ink/10 bg-paper-warm">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <Link
              href="/"
              className="font-headline text-xl font-bold text-ink hover:text-ink-light"
            >
              JP 타임즈
            </Link>
            <p className="mt-1 text-sm text-ink-muted">매주 발행하는 한글 주간 신문</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-ink-muted hover:text-ink">
              오늘의 신문
            </Link>
            <Link href="/archive" className="text-ink-muted hover:text-ink">
              과월호
            </Link>
            <Link href="/about" className="text-ink-muted hover:text-ink">
              소개
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-ink/10 pt-8 text-center text-sm text-ink-muted">
          © {currentYear} JP 타임즈. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
