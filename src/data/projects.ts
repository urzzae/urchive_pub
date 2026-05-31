export type Project = {
  id: string;
  num: string;
  title: string;
  period: string;
  color: string;
  width: string;
};
export const projects: Project[] = [
  {
    id: "project-01",
    num: "P01",
    title: "[개인작업] 국립중앙도서관 리디자인",
    period: "2021.12",
    color: "#5385c0",
    width: "55px",
  },
  {
    id: "project-02",
    num: "P02",
    title: "[개인작업] 책발전소 가상 웹사이트",
    period: "2021.12",
    color: "#e9e9e9",
    width: "65px",
  },
  {
    id: "project-03",
    num: "P03",
    title: "디자인210 쇼핑몰 개편 & 유지보수",
    period: `2022.03\n~\n2025.11`,
    color: "#d82744",
    width: "100px",
  },
  {
    id: "project-04",
    num: "P04",
    title: "디자인210 공식 웹사이트 구축",
    period: "2023\n~\n2024",
    color: "#ff6600",
    width: "75px",
  },
];
