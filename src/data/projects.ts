export type Project = {
  id: string;
  skill: string;
  title: string;
  date: string;
  summary: string;
  thumb: string;
};
export const projects: Project[] = [
  {
    id: "project-03",
    skill: "UI/UX · Markup · jQuery",
    title: "디자인210 쇼핑몰 개편 & 유지보수",
    date: `22.03 ~ 25.11`,
    thumb: "pj03_1",
    summary:
      "기존 서비스의 안정적인 운영을 위한\n유지보수 및 개선 작업을 진행했습니다.",
  },
  {
    id: "project-04",
    skill: "Design · Markup · jQuery · SCSS · GSAP",
    title: "디자인210 브랜드 웹사이트 퍼블리싱",
    date: "23 ~ 24",
    thumb: "pj04_1",
    summary:
      "브랜드 아이덴티티를 반영한 웹사이트의\n디자인 및 퍼블리싱을 함께 진행했습니다.",
  },
  {
    id: "project-02",
    skill: "Design · Markup · jQuery",
    title: "[개인작업] 책발전소 가상 웹사이트",
    date: "21.12",
    thumb: "pj02_1v",
    summary:
      "책발전소의 라이프스타일 브랜드 '브론테' 쇼핑몰을 개인 포트폴리오용으로\n감성적으로 리디자인한 사이드 프로젝트입니다.",
  },
  {
    id: "project-01",
    skill: "Design · Markup · jQuery",
    title: "[개인작업] 국립중앙도서관 리디자인",
    date: "21.12",
    thumb: "thumb_1",
    summary:
      "국립중앙도서관 웹사이트를 개인 포트폴리오용으로\n리디자인한 사이드 프로젝트입니다.",
  },
];
