import type { Issue, Article } from "@/types/article";

const sampleArticles: Article[] = [
  {
    id: "1",
    title: "2025년 한반도 경제 협력 전망",
    summary: "남북 교류 확대에 따른 지역 경제 효과가 기대된다.",
    content: "최근 남북 관계 개선 조짐과 함께 한반도 경제 협력에 대한 관심이 높아지고 있다. 전문가들은 2025년을 기점으로 교역 및 투자 활성화가 이뤄질 것으로 전망하고 있다.\n\n특히 개성공단 재가동과 철도 연결 사업이 본격화되면 인근 지역의 고용과 소득에 긍정적 효과가 있을 것으로 예상된다. 다만 국제 사회의 제재 완화와 정치적 안정이 선결 과제로 지적되고 있다.",
    section: "정치",
    author: "김기자",
    publishedAt: "2025-03-09T09:00:00",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&h=450&fit=crop",
  },
  {
    id: "2",
    title: "지역 문화재 복원 프로젝트 본격화",
    summary: "옛 건축물 10곳 복원에 50억원 투입 예정",
    content: "문화재청이 올해 지역 문화재 복원 사업을 대폭 확대한다. 10곳의 역사적 건축물에 총 50억원을 투입해 원형 복원과 주변 정비를 진행할 예정이다.\n\n대상은 조선 시대 서원, 향교, 민가 등으로 지역 주민들의 의견을 반영해 선정했다. 복원된 공간은 지역 문화 공간으로 활용되며, 청년 창업 지원 시설로도 일부 개방한다.",
    section: "문화",
    author: "박기자",
    publishedAt: "2025-03-09T10:30:00",
    featured: true,
    imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=450&fit=crop",
  },
  {
    id: "3",
    title: "미니멀 라이프 트렌드 급부상",
    summary: "MZ세대 소비 패턴 변화, '덜 사기' 문화 확산",
    content: "MZ세대 사이에서 미니멀리즘 라이프스타일이 빠르게 확산되고 있다. '덜 사기', '덜 쓰기'를 실천하는 소비자들이 늘어나면서 관련 콘텐츠와 커뮤니티도 성장세를 보이고 있다.\n\n전문가들은 경제 불확실성과 환경 의식 고조가 복합적으로 작용한 결과로 분석한다. 이에 소매업체들도 소량 구독, 대여 서비스 등 새로운 비즈니스 모델을 시험하고 있다.",
    section: "사회",
    author: "이기자",
    publishedAt: "2025-03-09T11:00:00",
    featured: false,
  },
  {
    id: "4",
    title: "재생에너지 투자 1조원 돌파",
    summary: "태양광·풍력 민간 투자 연간 기록 갱신",
    content: "올해 상반기만에 재생에너지 분야 민간 투자가 1조원을 돌파했다. 정부의 탄소중립 정책과 전력 수요 증가가 투자 확대로 이어졌다는 분석이다.\n\n태양광과 풍력이 전체 투자의 90%를 차지했으며, ESS(에너지저장장치) 투자도 전년 대비 2배 증가했다. 업계는 이 추세가 내년까지 이어질 것으로 예상하고 있다.",
    section: "경제",
    author: "최기자",
    publishedAt: "2025-03-09T08:00:00",
    featured: false,
  },
  {
    id: "5",
    title: "AI 번역 품질, 인간 수준 근접",
    summary: "한영 번역 정확도 95% 달성, 출판업계 활용 확대",
    content: "국내 연구진이 개발한 AI 번역 엔진이 한영 번역에서 인간 전문 번역가 수준에 근접한 품질을 보여 눈길을 끈다. BLEU 점수 95점을 달성했으며, 문맥 이해와 어휘 선택에서도 큰 향상을 이뤘다.\n\n출판업계는 이 기술을 활용해 해외 도서 국내 소개 속도를 높이고 있다. 다만 문학 작품처럼 nuance가 중요한 분야에서는 아직 인간 번역이 필요하다는 의견이 지배적이다.",
    section: "IT/과학",
    author: "정기자",
    publishedAt: "2025-03-09T14:00:00",
    featured: false,
  },
];

export const issues: Issue[] = [
  {
    id: "issue-2025-10",
    number: 10,
    date: "2025-03-09",
    title: "2025년 3월 2주",
    articles: sampleArticles,
  },
  {
    id: "issue-2025-09",
    number: 9,
    date: "2025-03-02",
    title: "2025년 3월 1주",
    articles: sampleArticles.map((a, i) => ({ ...a, id: `${a.id}-prev` })),
  },
];

export const sections = [
  "정치",
  "경제",
  "사회",
  "문화",
  "국제",
  "스포츠",
  "IT/과학",
  "오피니언",
] as const;
