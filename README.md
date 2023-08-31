# 프로젝트 설명 및 구조

비로보틱스 과제입니다.

```
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
```

-   components : 컴포넌트가 모여있는 폴더
-   lib : 프로젝트에 필요한 각종 코드들이 모여있는 폴더
-   pages : 페이지 컴포넌트
-   recoil : recoil과 관련된 코드
-   stories : 스토리북과 관련된 코드
-   styles : 스타일링과 관련된 코드

# 로컬 환경 프로젝트 실행 방법

-   로컬 실행

```
 yarn dev
```

-   스토리북 실행

```
yarn storybook
```

# 라이브러리

-   **SERVER STATE DATA MANAGEMENT** : [@tanstack/react-query](https://tanstack.com/query/v4/docs/react/overview '@tanstack/react-query')
-   **CSS STYLE** : SCSS
-   **ICON** :[react-icons](https://react-icons.github.io/react-icons/ 'react-icons')
-   **STATE MANAGEMENT** : [recoil](https://recoiljs.org/ko/docs/introduction/installation 'recoil')
-   **FORM** : [react-hook-form](https://react-hook-form.com/get-started 'react-hook-form')
-   **FORM VALIDATION** : [yup](https://github.com/jquense/yup#usage 'yup')
-   **ROUTING AND NAVIGATION** : [react-router-dom](https://reactrouter.com/en/main 'react-router-dom')
-   **COMPONENT** : [storybook](https://storybook.js.org/docs/react/get-started/install/)

# 생각

-   모달 :  
    모달의 유형을 confirm , message , error로 정의하였습니다.  
    모달을 사용하는 상황이 통일화가 안되어있는 것 같았습니다.( ex. 삭제 전 삭제하시겠습니까? 확인이 나오지만 등록하기 전 등록 하겠습니까?는 요구사항에 주어지지 않음) 하지만, 등록시에도 사용할 수 있도록 type값으로 delete와 upload 값을 받아와서 미래에 사용할 수 있도록 구현하였습니다.

-   검색 필터링 :  
    react 18에서 제공해주는 useDeferredValue를 사용해보고 싶었는데, 429에러로 인하여 debounce로 구현하였습니다.

-   react v18에 추가된 기술을 적용해보려고 노력하였습니다. 그동안 사용하지 않던 기술을 사용해보면서 저도 재미있게 과제를 수행하였습니다. 이 코드를 바탕으로 이야기를 나누는 시간을 가졌으면 좋겠습니다.

# etc

-   App.css, Index.css 는 global.scss 로 합침
-   scss 변수를 전역으로 설정하기 위해 vite 설정 추가
