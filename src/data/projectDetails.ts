type Figure = {
  type: "img" | "video";
  src: string;
  alt: string;
  caption: string;
  desc?: string;
};

type ContentBlock =
  | { kind: "figure"; figure: Figure }
  | { kind: "row"; figures: Figure[] };
export type DetailButton = {
  label: string;
  href: string;
};
export type ProjectDetail = {
  id: string;
  num: string;
  title: string;
  tags: string[];
  description: string;
  buttons?: DetailButton[];
  contribution?: string;
  content: ContentBlock[];
};

export const projectDetails: ProjectDetail[] = [
  {
    id: "project-01",
    num: "Side Project",
    title: "[개인작업] 국립중앙도서관 리디자인",
    tags: [
      "Photoshop",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Web & Mobile",
    ],
    contribution: "개인작업 기여도 : 100%",
    description:
      "국립중앙도서관 웹사이트를 공공기관 UI 구현 연습을 목적으로 제작한 사이드 프로젝트입니다.\n공공기관 사이트 특유의 복잡한 정보 구조를 사용자 관점에서 주요 서비스의 접근성과 중요도를 중점으로 콘텐츠를 재구성했습니다.\n시맨틱 마크업을 기반으로 웹 표준과 웹 접근성(KWCAG), 검색엔진 최적화(SEO)를 고려해 구현했습니다.",
    buttons: [
      { label: "Github", href: "https://github.com/urzzae/portfolio_p01_pub" },
      {
        label: "메인페이지 결과물",
        href: "https://urzzae.dothome.co.kr/library/home.html",
      },
      {
        label: "서브페이지 결과물",
        href: "https://urzzae.dothome.co.kr/library/sub.html",
      },
    ],
    content: [
      {
        kind: "row",
        figures: [
          {
            type: "img",
            src: "pj01_1",
            alt: "국립중앙도서관 리디자인 메인페이지 스크린샷",
            caption: "메인페이지",
          },
          {
            type: "img",
            src: "pj01_2",
            alt: "국립중앙도서관 리디자인 서브페이지 스크린샷",
            caption: "서브페이지",
          },
        ],
      },
      {
        kind: "figure",
        figure: {
          type: "img",
          src: "pj01_3",
          alt: "국립중앙도서관 리디자인 모바일화면 스크린샷",
          caption: "모바일화면",
        },
      },
    ],
  },
  {
    id: "project-02",
    num: "Side Project",
    title: "[개인작업] 책발전소 가상 웹사이트",
    tags: [
      "Photoshop",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Web & Mobile",
    ],
    contribution: "개인작업 기여도 : 100%",
    description:
      "책발전소의 라이프스타일 브랜드 '브론테' 쇼핑몰을 개인 포트폴리오용으로 리디자인한 사이드 프로젝트입니다.\nSwiper로 다양한 형태의 슬라이드를 구현했으며, 스크롤 관련 라이브러리를 활용한 인터랙션을 통해 사용자 경험을 높였습니다.",
    buttons: [
      {
        label: "전체페이지 결과물",
        href: "https://urzzae.dothome.co.kr/bookplant/index.html",
      },
    ],
    content: [
      {
        kind: "figure",
        figure: {
          type: "video",
          src: "pj02_1v",
          alt: "책발전소 가상 웹사이트 메인 페이지",
          caption: "메인 페이지",
        },
      },
      {
        kind: "row",
        figures: [
          {
            type: "img",
            src: "pj02_1",
            alt: "책발전소 가상 웹사이트 서브페이지1 스크린샷",
            caption: "서브페이지1",
          },
          {
            type: "img",
            src: "pj02_2",
            alt: "책발전소 가상 웹사이트 서브페이지2 스크린샷",
            caption: "서브페이지2",
          },
        ],
      },
      {
        kind: "figure",
        figure: {
          type: "img",
          src: "pj02_3",
          alt: "책발전소 가상 웹사이트 모바일화면 스크린샷",
          caption: "모바일화면",
        },
      },
    ],
  },
  {
    id: "project-03",
    num: "Work Project",
    title: "디자인210 자사몰 개편 & 유지보수",
    tags: [
      "Photoshop",
      "Figma",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Web & Mobile",
    ],
    contribution: "기획&디자인 기여도 : 60% / 퍼블리싱 기여도 : 100%",
    description:
      "기존 서비스의 안정적인 운영을 위한 유지보수와 개선 작업을 담당했습니다.\n명확한 가이드 없이 누적된 리뉴얼로 인한 사용자 혼란을 막기위해 새로운 디자인 기준을 수립하고, UI를 컴포넌트 단위로 재구성해 재사용성과 작업 효율성을 향상시켰습니다.\n또한 팀 협업을 통해 운영 과정에서 발생하는 문제를 분석하고 개선함으로써 서비스 만족도 향상에 기여했습니다.",
    buttons: [
      {
        label: "프로젝트 자세히보기(pdf)",
        href: "../채유라_UIUX개선경험_포트폴리오.pdf",
      },
    ],
    content: [
      {
        kind: "figure",
        figure: {
          type: "video",
          src: "pj03_1",
          alt: "디자인210 쇼핑몰 메인 페이지",
          caption: "메인 페이지",
          desc: "복잡하고 불균형했던 헤더 내비게이션 구조를 직관적으로 재정립하고, 불필요한 메뉴는 통합하여 핵심 서비스로의 접근성을 높였습니다. \n신규 폰트와 추천 콘텐츠로 구성된 메인 페이지는 각 콘텐츠의 전달력을 고려해, 많은 정보를 다양한 슬라이드에 담아 자연스럽게 탐색할 수 있도록 흐름을 개선했습니다.",
        },
      },
      {
        kind: "row",
        figures: [
          {
            type: "img",
            src: "pj03_1",
            alt: "디자인210 쇼핑몰 폰트 상세페이지",
            caption: "폰트 상세페이지",
            desc: "다양한 폰트를 서비스하는 만큼 원하는 폰트를 찾기 어려운 문제가 있었고, 폰트 정보 구조와 노출 방식을 개편했습니다. 활용 이미지를 슬라이드로 변경해 한눈에 볼 수 있게 하고, 실시간 미리보기 기능을 추가해 편의성을 높였습니다.",
          },
          {
            type: "img",
            src: "pj03_2",
            alt: "디자인210 쇼핑몰 결제페이지",
            caption: "결제페이지",
            desc: "마이페이지, 결제 등 사용자와 직접 상호작용하는 영역에서 흐름을 분석해 UX 최적화에 집중했습니다.",
          },
        ],
      },
      {
        kind: "figure",
        figure: {
          type: "img",
          src: "pj03_4",
          alt: "디자인210 쇼핑몰 모바일화면",
          caption: "모바일화면",
          desc: "일부 페이지만 반응형이 적용되어 사용성이 떨어졌던 모바일 환경을 개선하고, 모바일 결제를 도입해 사용자 경험과 편의성을 향상시켰습니다.",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "img",
          src: "pj03_5",
          alt: "디자인210 프로모션 페이지 스크린샷",
          caption: "다양한 프로모션 페이지 퍼블리싱",
          desc: "시각적 요소가 많은 프로모션 페이지의 특성을 고려해 이미지 스프라이트 및 Lazy Loading으로 리소스 로딩을 최적화하고 렌더링 성능을 개선했으며, 시맨틱 마크업으로 웹 접근성을 향상시켰습니다.",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "img",
          src: "pj03_6",
          alt: "디자인210 폰트 상세이미지 작업",
          caption: "폰트 상세이미지 작업",
          desc: "폰트의 컨셉과 분위기를 효과적으로 전달하기 위해 목업 및 예시 이미지를 제작했습니다.",
        },
      },
    ],
  },
  {
    id: "project-04",
    num: "Work Project",
    title: "디자인210 브랜드 웹사이트 구축",
    tags: [
      "Photoshop",
      "Illustrator",
      "Figma",
      "HTML5",
      "SCSS",
      "GSAP",
      "JavaScript",
      "jQuery",
      "Web & Mobile",
    ],
    contribution: "기획&디자인 기여도 : 60% / 퍼블리싱 기여도 : 100%",
    description:
      "브랜드 아이덴티티를 반영한 공식 웹사이트의 디자인 및 퍼블리싱을 진행한 프로젝트입니다.\nGSAP(ScrollTrigger)를 활용해 스크롤 기반 인터랙션을 구현하고, 심플하면서도 캐주얼한 브랜드 무드를 반영했습니다.\nSCSS로 공통 스타일을 모듈화하고, 재사용성과 유지보수성을 높인 디자인 시스템을 구축했습니다.\n* 본 프로젝트는 내부 사정으로 중단된 프로젝트이나, 개인 포트폴리오 목적으로 재구성하였습니다.",
    buttons: [
      {
        label: "Github",
        href: "https://github.com/urzzae/portfolio_p04_pub",
      },
      {
        label: "전체페이지 결과물",
        href: "https://portfolio-p04-pub.vercel.app/index.html",
      },
    ],
    content: [
      {
        kind: "figure",
        figure: {
          type: "video",
          src: "pj04_1",
          alt: "디자인210 공식 웹사이트 메인 페이지",
          caption: "메인 페이지",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "video",
          src: "pj04_2",
          alt: "디자인210 공식 웹사이트 기업소개 페이지",
          caption: "기업소개 페이지",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "video",
          src: "pj04_3",
          alt: "디자인210 공식 웹사이트 전용서체 페이지",
          caption: "전용서체 설명 페이지",
        },
      },
      {
        kind: "row",
        figures: [
          {
            type: "img",
            src: "pj04_6",
            alt: "디자인210 공식 웹사이트 SCSS 구조",
            caption: "SCSS 모듈화 아키텍처 설계",
            desc: "재사용성과 유지보수성을 높이기 위해 스타일을 역할에 따라 분리하고, 변수와 믹스인 중앙 관리로 일관된 디자인 시스템을 구현했습니다.",
          },
          {
            type: "img",
            src: "pj04_7",
            alt: "디자인210 공식 웹사이트 SCSS 구조",
            caption: "SCSS 변수·mixin 사용 예시",
            desc: "변수를 활용한 타이포그래피 및 컬러 시스템을 설계하고, 반복되는 패턴은 Mixin으로 추상화해 코드 중복을 최소화했습니다.",
          },
        ],
      },
      {
        kind: "figure",
        figure: {
          type: "video",
          src: "pj04_5",
          alt: "메이크어스 전용서체 <Dingo> 상세페이지",
          caption: "메이크어스 전용서체 <Dingo>",
          desc: "디자인210에서 진행한 전용서체의 상세페이지를 각 브랜드 아이덴티티와 서체 컨셉에 맞춰 디자인, 퍼블리싱을 작업했습니다. (총 42건)",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "video",
          src: "pj04_4",
          alt: "펜먼 전용서체 <펜먼> 상세페이지",
          caption: "펜먼 전용서체 <펜먼>",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "video",
          src: "pj04_6",
          alt: "tvN 채널 전용서체 <삼시세끼> 상세페이지",
          caption: "tvN 채널 전용서체 <삼시세끼>",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "img",
          src: "pj04_1",
          alt: "tvN 채널 전용서체 <꽃보다할배>",
          caption: "tvN 채널 전용서체 <꽃보다할배>",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "img",
          src: "pj04_2",
          alt: "비상교육 전용서체 <Visang Math>",
          caption: "비상교육 전용서체 <Visang Math>",
        },
      },
      {
        kind: "figure",
        figure: {
          type: "img",
          src: "pj04_3",
          alt: "CJ E&M Olive 전용서체 <OLIVE YOLO>",
          caption: "CJ E&M Olive 전용서체 <OLIVE YOLO>",
        },
      },
    ],
  },
];
