# URCHIVE - Web Portfolio

React, TypeScript, Vite 기반으로 구축한 **포트폴리오 아카이브 용도의 개인 홈페이지**입니다. 컴포넌트 단위로 구조화하고 CSS Modules(SCSS)로 스타일을 관리했으며, Framer Motion을 활용한 인터랙션을 구현했습니다.

🔗 **[Live Demo](https://urchive.vercel.app/)**

![URCHIVE preview](public/readme_preview.gif)

## 사용 기술

- React 19 + TypeScript
- Vite
- SCSS Modules
- Framer Motion
- yet-another-react-lightbox
- React Router

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

## 주요 기능

- 스크롤 기반 등장 애니메이션
- 드래그 슬라이드 (Framer Motion, 반응형으로 활성화 제어)
- 라이트박스 (캡션 지원)
- 프로젝트 리스트와 상세 페이지를 데이터 + 재사용 컴포넌트로 통합

## 트러블슈팅

**1. 데이터 구조 리팩터링 후 페이지 이동 시 이전 프로젝트의 미디어가 그대로 표시됨**

- 하드코딩된 상세 페이지 4개를 데이터 기반 구조로 리팩터링함 → 페이지 이동 시, 첫 미디어가 이전 프로젝트의 미디어로 그대로 보이는 현상 확인
- **원인** : 배열의 index를 `key`로 사용해 React가 기존 미디어 DOM을 재사용해버림 → `source`만 변경되고 실제로 재로드하지 않음
- **해결** : 컨텐츠 영역에 `key={id}`를 추가하고, 페이지 이동 시 리마운트되도록 처리함

**2. 슬라이드에 드래그 시 클릭이 동시에 실행됨**

- 커미션 프로젝트를 나열한 슬라이드에서 드래그 후 손을 떼면 클릭이 되어 라이트박스가 열리는 현상 확인
- **원인** : 드래그 종료 시 `pointerup`이 클릭으로도 인식됨
- **해결** : 드래그 시작 시 플래그를 세워 캡처 단계 `onClickCapture`에서 클릭을 막음
