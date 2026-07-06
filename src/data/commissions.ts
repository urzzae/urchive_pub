export type Commission = {
  id: string;
  thumb: string;
  src: string;
  skill: string;
  title?: string;
  desc?: string;
};
export const commissions: Commission[] = [
  {
    id: "commission-01",
    thumb: "cm_thumb_1",
    src: "cm01_1",
    skill: "Windows98 · Interaction",
    title: "Commission work 1",
    desc: "윈도우 98을 모티브로 한 공포 컨셉의 프로젝트입니다.\n레트로 감성의 UI를 직접 설계하고, 실제 컴퓨터를 조작하는 듯한 다양한 인터랙션을 구현하여 몰입감을 높였습니다.",
  },
  {
    id: "commission-02",
    thumb: "cm_thumb_2",
    src: "cm02_1",
    skill: "Animation · Interaction",
    title: "Commission work 2",
    desc: "What's in my bag? 컨셉으로 작업한 프로젝트입니다.\n가방 안의 물건들이 자연스럽게 펼쳐져 나오는 애니메이션을 구현해 시각적인 재미를 더했습니다.",
  },
  {
    id: "commission-03",
    thumb: "cm_thumb_3",
    src: "cm03_1",
    skill: "Animation · Interaction",
    title: "Commission work 3",
    desc: "우주와 행성을 컨셉으로 한 아이돌 멤버의 생일 기념 웹진 사이트입니다.\n타이핑 애니메이션과 유성이 쏟아지는 인터랙션을 구현해 테마에 맞는 몰입감 있는 분위기를 연출했습니다.",
  },
  {
    id: "commission-04",
    thumb: "cm_thumb_4",
    src: "cm04_1",
    skill: "Animation · Interaction",
    title: "Commission work 4",
    desc: "일본 잡지사 컨셉으로 한 애니메이션 주인공 생일 기념 웹진 사이트입니다.\n특유의 키치한 감성을 살리고, 게임을 연상시키는 모션을 더해 독특한 사용자 경험을 제공했습니다.",
  },
];
