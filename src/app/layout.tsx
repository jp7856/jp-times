import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JP 타임즈 | 주간 한글 신문",
  description: "매주 발행하는 한글 주간 신문",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-paper antialiased">{children}</body>
    </html>
  );
}
