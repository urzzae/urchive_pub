export type Project = {
  id: string;
  skill: string;
  title: string;
  date: string;
  summary: string;
  thumb: string;
  hasVideo: boolean;
};
export const projects: Project[] = [
  {
    id: "project-03",
    skill: "Cross-browsing · jQuery",
    title: "디자인210 자사몰 개편 & 유지보수",
    date: `22.03 ~ 25.11`,
    thumb: "pj03_1",
    hasVideo: true,
    summary:
      "기존 서비스의 안정적인 운영을 위한\n유지보수 및 개선 작업을 진행했습니다.",
  },
  {
    id: "project-04",
    skill: "jQuery · SCSS · GSAP",
    title: "디자인210 브랜드 웹사이트 구축",
    date: "24.06 ~ 24.10",
    thumb: "pj04_1",
    hasVideo: true,
    summary:
      "브랜드 아이덴티티를 반영한 브랜드 공식 웹사이트의\n디자인 및 퍼블리싱을 진행했습니다.",
  },
  {
    id: "project-02",
    skill: "Design · Markup",
    title: "[개인작업] 책발전소 가상 웹사이트",
    date: "21.12",
    thumb: "pj02_1v",
    hasVideo: true,
    summary:
      "책발전소의 라이프스타일 브랜드 '브론테' 쇼핑몰을 개인 포트폴리오용으로\n리디자인한 사이드 프로젝트입니다.",
  },
  {
    id: "project-01",
    skill: "Design · Markup · Web Standards · KWCAG · SEO",
    title: "[개인작업] 국립중앙도서관 리디자인",
    date: "21.12",
    thumb: "thumb_1",
    hasVideo: false,
    summary:
      "국립중앙도서관 웹사이트를 개인 포트폴리오용으로\n리디자인한 사이드 프로젝트입니다.",
  },
];
