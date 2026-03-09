export type Section =
  | "정치"
  | "경제"
  | "사회"
  | "문화"
  | "국제"
  | "스포츠"
  | "IT/과학"
  | "오피니언";

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  section: Section;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Issue {
  id: string;
  number: number;
  date: string;
  title: string;
  articles: Article[];
}
