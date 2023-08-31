# 프로젝트 설명 및 구조

.
├── README.md
├── index.html
├── package.json
├── public
│   ├── mockServiceWorker.js
│   └── vite.svg
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── style.module.scss
│   │   ├── Divider
│   │   │   ├── index.tsx
│   │   │   └── style.module.scss
│   │   ├── Error
│   │   │   └── ErrorBoundary.tsx
│   │   ├── Form
│   │   │   ├── DeatailForm.tsx
│   │   │   ├── UploadForm.tsx
│   │   │   └── style.module.scss
│   │   ├── Input
│   │   │   ├── CheckBox.module.scss
│   │   │   ├── CheckBox.tsx
│   │   │   ├── Input.module.scss
│   │   │   ├── Input.tsx
│   │   │   ├── SearchInput.module.scss
│   │   │   ├── SearchInput.tsx
│   │   │   ├── SelectBox.module.scss
│   │   │   ├── SelectBox.tsx
│   │   │   ├── TextArea.module.scss
│   │   │   └── TextArea.tsx
│   │   ├── Modal
│   │   │   ├── ConfirmModal.module.scss
│   │   │   ├── ConfirmModal.tsx
│   │   │   ├── ErrorModal.module.scss
│   │   │   ├── ErrorModal.tsx
│   │   │   ├── MessageModal.tsx
│   │   │   ├── ModalPortal.module.scss
│   │   │   └── ModalPortal.tsx
│   │   ├── Spinner
│   │   │   ├── index.tsx
│   │   │   └── style.module.scss
│   │   ├── Table
│   │   │   ├── TableCell.tsx
│   │   │   ├── index.tsx
│   │   │   └── style.module.scss
│   │   ├── Typography
│   │   │   ├── index.tsx
│   │   │   └── style.module.scss
│   │   └── index.ts
│   ├── lib
│   │   ├── api
│   │   │   ├── consulting.ts
│   │   │   └── index.ts
│   │   ├── models
│   │   │   ├── useDeleteItem.ts
│   │   │   ├── useGetDetailItem.ts
│   │   │   ├── useGetList.ts
│   │   │   └── useUploadeItem.ts
│   │   └── queryKeyFactory.ts
│   ├── main.tsx
│   ├── mocks
│   │   ├── browser.ts
│   │   ├── data.ts
│   │   ├── errors.ts
│   │   ├── handlers.ts
│   │   └── utils.ts
│   ├── pages
│   │   ├── Detail
│   │   │   ├── index.tsx
│   │   │   └── style.module.scss
│   │   ├── List
│   │   │   ├── index.tsx
│   │   │   └── style.module.scss
│   │   ├── NotFound
│   │   │   └── index.tsx
│   │   └── Upload
│   │   ├── index.tsx
│   │   └── style.module.scss
│   ├── recoil
│   │   └── modalState.ts
│   ├── stories
│   │   ├── Button.stories.tsx
│   │   ├── Divider.stories.tsx
│   │   ├── Modal.stories.tsx
│   │   ├── Spinner.stories.tsx
│   │   └── Typography.stories.tsx
│   ├── styles
│   │   ├── base
│   │   │   ├── \_reset.scss
│   │   │   └── \_variables.scss
│   │   └── globals.scss
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock

components : 컴포넌트가 모여있는 폴더
lib : 프로젝트에 필요한 각종 코드들이 모여있는 폴더
pages : 페이지 컴포넌트
recoil : recoil과 관련된 코드
stories : 스토리북과 관련된 코드
styles : 스타일링과 관련된 코드

# 로컬 환경 프로젝트 실행 방법

로컬 실행 : yarn dev
스토리북 실행 : yarn storybook

# 라이브러리

(라이브러리를 추가하신 경우) 어떤 라이브러리를 사용하였는지 설명 기술

-   react-query 사용
-   상태관리를 위한 recoil 사용
-   react-icons 아이콘 사용
-   form validation을 위한 react-hook-form 사용

# 테스트

(테스트를 작성하신 경우) 로컬 환경 테스트 실행 방법

# 생각

(모호한 부분이 있었을 경우) 어떻게 생각했고 해결한 지에 대한 설명 기술

-   모달 공통화 처리 , 현재 등록할때는 등록하시겠습니까? 모달 확인없이 바로 등록처리로 가고 있음, 삭제할때는 한번 확인하고 삭제
    type으로 delete, upload 값을 받아서 text값과 icon을 변경해야할까 고민을 함

-   폼 유효성 검사 : 메세지 임의로 추가 , 휴대폰 번호 앞자리 011,019 제외 010,012~018 입력 가능

# etc

-   App.css, Index.css 는 global.scss 로 합침
-   scss 변수를 전역으로 설정하기 위해 vite 설정 추가

그 외 추가적으로 문서화가 필요한 부분
