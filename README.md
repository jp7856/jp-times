# JP 타임즈

매주 발행하는 한글 주간 신문 웹 시스템입니다.

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

## 주요 기능

- **홈페이지**: 최신 호 주요 기사 + 기사 목록
- **기사 상세**: 개별 기사 읽기
- **과월호**: 지난 호 아카이브
- **반응형 디자인**: 모바일·태블릿·데스크톱 최적화 (추가 모바일 최적화 예정)

## 기술 스택

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Noto Sans KR / Noto Serif KR (한글 폰트)

## 프로젝트 구조

```
src/
├── app/              # 페이지 (라우팅)
├── components/       # 재사용 컴포넌트
├── data/             # 샘플 이슈·기사 데이터
└── types/            # TypeScript 타입
```

## 데이터 구조

- `src/data/issues.ts`: 이슈·기사 데이터 (향후 CMS/DB 연동 예정)
- 섹션: 정치, 경제, 사회, 문화, 국제, 스포츠, IT/과학, 오피니언
