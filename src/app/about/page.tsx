import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="font-headline text-2xl sm:text-3xl font-bold text-ink">
          JP 타임즈 소개
        </h1>
        <div className="mt-8 space-y-6 text-ink leading-relaxed">
          <p>
            JP 타임즈는 매주 발행하는 한글 주간 신문입니다. 정치, 경제, 사회, 문화,
            국제, 스포츠, IT/과학, 오피니언 등 다양한 섹션의 기사를 제공합니다.
          </p>
          <p>
            깊이 있는 분석과 신속한 보도로 독자 여러분께 유익한 정보를 전달하는
            것을 목표로 합니다.
          </p>
          <p className="text-ink-muted">
            문의: contact@jp-times.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
