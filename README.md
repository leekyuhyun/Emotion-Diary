# 📘 감정 일기장 (Emotion Diary)

> **인프런 - 한 입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지** > 강의의 지식을 바탕으로 하여, 최신 기술 스택과 독창적인 UI로 재구성한 최종 프로젝트입니다.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 🚀 프로젝트 개요

사용자가 그날의 감정을 선택하고 일기를 기록할 수 있는 웹 서비스입니다. 기존 강의의 비즈니스 로직을 유지하면서, **Tailwind CSS v4**를 도입하여 **소프트 모던 블루** 컨셉의 **타임라인 피드 UI**로 전면 개편하였습니다.

### 주요 기능

- **일기 CRUD**: `useReducer`와 `Context API`를 활용한 체계적인 일기 데이터 관리.
- **데이터 영속성**: `LocalStorage` 연동을 통해 브라우저를 종료해도 데이터가 유지되도록 구현.
- **타임라인 UI**: 단순 리스트가 아닌 시간의 흐름을 시각화한 타임라인 레이아웃 적용.
- **감정 트래킹**: 5단계 감정 아이콘과 고유 컬러 시스템을 통한 직관적인 기록.
- **동적 필터링**: 월별 데이터 분류 및 최신순/오래된 순 정렬 기능 제공.

---

## 🛠 기술 스택

- **Core**: React.js (v18+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4, PostCSS
- **Routing**: React Router DOM (v6)
- **State Management**: `useReducer`, `Context API`
- **Hooks**: Custom Hooks (`useDiary`, `usePageTitle`)

---

## 📁 프로젝트 구조

```text
src
 ┣ assets          # 감정 아이콘 이미지 자산
 ┣ components      # Header, Button, Editor, Viewer, DiaryList 등
 ┣ hooks           # 비즈니스 로직 분리를 위한 커스텀 훅
 ┣ utils           # 공통 상수 및 이미지 처리 로직
 ┣ views           # Home, New, Edit, Diary 페이지 컴포넌트
 ┣ App.jsx         # 최상단 루트 컴포넌트 및 데이터 초기화 로직
 ┗ index.css       # Tailwind v4 설정 및 글로벌 스타일
```

## ⚙️ 실행 및 세팅 방법 (Quick Start)

이 프로젝트는 **Vite**와 **Tailwind CSS v4**를 기반으로 작동합니다.
환경 설정을 위해 아래 단계를 순서대로 실행해 주세요.

### 1. 패키지 설치

먼저 프로젝트에 필요한 기본 라이브러리들을 설치합니다.

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

## 💡 학습 목표 및 성과

- 상세한 상태 관리: useReducer를 사용하여 복잡한 상태 업데이트 로직을 깔끔하게 분리했습니다.

- 최적화 및 UX: useEffect를 활용한 데이터 동기화와 커스텀 훅을 통한 코드 재사용성을 높였습니다.

---

강의 출처 : [인프런-한 입 크기로 잘라 먹는 리액트](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8?attributionToken=mgHwmQoMCIKgpM4GENGiwpsCEAEaJDY5ZGIxODQ5LTAwMDAtMjhjOS05ODZlLTg4M2QyNGY0YmJmNCokMGNjM2VhNWUtM2NlMC00MWE1LTgzNWQtNjk3MmRmZmY3OGMyMiCQ97Iwt7eMLcLwnhXUsp0Vjr6dFajlqi2c1rctn9a3LToOZGVmYXVsdF9zZWFyY2hIAVgBYAFoAXoCdHA&cid=328340)

배포 주소 : [감정 일기장](https://emotion-diary-rust-five.vercel.app)
