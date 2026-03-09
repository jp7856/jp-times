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

## 배포 (Cloudflare Pages)

**jp-times** 프로젝트에서 배포합니다.

- **대시보드**: [Cloudflare Pages - jp-times](https://dash.cloudflare.com/3f8e90d68a3b9506edf3d3eeb049bd72/pages/view/jp-times)

### 빌드 설정 (필수 - 대시보드에서)

로그에 `No build command specified. Skipping build step` 가 나오면 **빌드가 실행되지 않은 것**입니다. 반드시 아래처럼 설정해야 합니다.

1. [jp-times 프로젝트](https://dash.cloudflare.com/3f8e90d68a3b9506edf3d3eeb049bd72/pages/view/jp-times) → **Settings**
2. **Builds & deployments** → **Build configurations** (또는 **Build configuration**)
3. **Framework preset**에서 **Next.js (Static HTML Export)** 선택  
   - 이 프리셋이 없으면 아래를 **수동 입력**:
   - **Build command**: `npx next build` 또는 `npm run build`
   - **Build output directory**: `out`
4. **Save** 클릭
5. **Deployments** 탭으로 이동 → **Create deployment** 또는 **Retry deployment**

설정 후 배포 로그에 `Success: Finished cloning` 다음에 `Running build command...` 가 보여야 합니다.

### CLI로 직접 배포

```bash
npm run build
npx wrangler pages deploy out --project-name=jp-times
```
