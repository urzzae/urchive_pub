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
      "국립중앙도서관 웹사이트를 공공기관 UI 구현 연습을 목적으로 제작한 사이드 프로젝트입니다.\n복잡한 GNB와 사이드바 네비게이션, 탭·캘린더·공지사항 등 다양한 UI 컴포넌트를 구현하였으며, 사용자 관점에서 주요 서비스의 접근성과 중요도를 고려해 메인 콘텐츠를 재구성했습니다.",
    buttons: [
      { label: "프로젝트 자세히보기", href: "/images/pj01_detail.jpg" },
      {
        label: "메인페이지 결과물",
        href: "https://urzzae.dothome.co.kr/library/home.html",
      },
      {
        label: "서브페이지 결과물",
        href: "https://urzzae.dothome.co.kr/library/sub.html",
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
      "책발전소의 라이프스타일 브랜드 '브론테' 쇼핑몰을 개인 포트폴리오용으로 감성적으로 리디자인한 사이드 프로젝트입니다.\n브랜드 아이덴티티에 맞는 컬러·타이포그래피·여백을 설계하고, 쇼핑몰의 핵심 페이지를 목적에 맞게 구조화했습니다.\nSwiper를 활용해 다양한 형태의 슬라이드를 구현하였으며, 스크롤 인터랙션과 동적 모션으로 사용자 경험을 높이고 전 페이지를 반응형 웹으로 구현했습니다.",
    buttons: [
      {
        label: "전체페이지 결과물",
        href: "https://urzzae.dothome.co.kr/bookplant/home.html",
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
      "기존 서비스의 안정적인 운영을 위한 유지보수와 개선 작업을 담당했습니다.\n명확한 가이드 없이 누적된 리뉴얼로 인해 스타일 충돌이 잦아, 디자인 기준을 정립하고 UI를 컴포넌트 단위로 재구성하여 재사용성과 작업 효율성을 향상시켰습니다.\n또한 팀 협업을 통해 운영 과정에서 발생하는 문제를 분석하고 개선함으로써 서비스 만족도(CS 감소)와 구독 전환율 향상에 기여했습니다.",
    buttons: [
      {
        label: "프로젝트 자세히보기(pptx)",
        href: "https://huchu.link/rIx1BIe",
      },
    ],
  },
  {
    id: "project-04",
    num: "Work Project",
    title: "디자인210 브랜드 웹사이트 퍼블리싱",
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
    buttons: [
      {
        label: "전체페이지 결과물",
        href: "https://portfolio-p04.vercel.app/index.html",
      },
      {
        label: "github",
        href: "https://github.com/urzzae/portfolio_p04_public.git",
      },
    ],
    contribution: "기획&디자인 기여도 : 60% / 퍼블리싱 기여도 : 100%",
    description:
      "브랜드 아이덴티티를 반영한 웹사이트의 디자인 및 퍼블리싱을 함께 진행한 프로젝트입니다.\nGSAP(ScrollTrigger)를 활용해 스크롤 기반 인터랙션을 구현하고, 심플하면서도 캐주얼한 브랜드 무드를 반영했습니다.\nSCSS를 활용해 스타일을 체계적으로 구조화하여 재사용성과 유지보수성을 고려한 스타일 시스템을 구축했습니다.\n* 본 프로젝트는 내부 사정으로 인해 중단되었습니다.",
  },
];
