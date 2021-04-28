# react개발환경 설정(react_study)
- visual studio code설치 (https://code.visualstudio.com/)
- node.js다운로드/설치 (https://nodejs.org/)
- project root path folder를 vscode로 열기
- vscode terminal이용해서 react project생성 __npx create-react-app [app name]__ 입력
- command 실행 완료 후 [app name]폴더로 이동
- 프로젝트 실행 npm start
- 페이지 이동을 위해 필요한 라이브러리 npm install react-router-dom —save 
- 브라우저에서 생성 된 프로젝트 실행 여부 확인

## create-react-app가 자동 생성한 모듈 관련 설정파일 관련
- 숨겨져 있던 설정파일 프로젝트 경로에 추가하기: npm run eject

## 생성 된 각 폴더/파일 설명
> public  
정적인 파일을 넣어두는 폴더(이 폴더 안에 있는 내용은 배포할 때 압축 안 됨)

> src  
소스코드

> package.json
설치 한 라이브러리 목록(직접 수정 할 필요 없음)
npm init명령어로 인해 생성됨. 

## react코드 작성 관련 
- https://www.w3schools.com/react/default.asp

## hooks에 관한 설명
- https://ko.reactjs.org/docs/hooks-intro.html



# 프로젝트 생성

이 프로젝트는 Create React App 으로 생성 되었습니다.

## 사용 가능한 스크립트

현재 경로에서 다음을 실행할 수 있습니다.

### `npm start`

개발 모드로 앱을 실행합니다.\
해당 URL를 통해 브라우저에서 확인 할 수 있습니다.
http://localhost:3000

코드를 수정하면 페이지가 다시 로드 됩니다.\
콘솔에서 lint에러도 확인 할 수 있습니다.

### `npm test`

대화형 모드를 통한 테스트가 가능합니다.\
테스트에 관한 정보를 다음 링크에서 얻을 수 있습니다. [running tests](https://facebook.github.io/create-react-app/docs/running-tests) 

### `npm run build`

build 폴더에서 배포용 앱을 build합니다.\
배포 된 앱의 올바른 패키징, 퍼포먼스를 위해 빌드를 최적화 합니다.\

빌드가 작업이 간소화 되며 파일명에 hash가 포함됩니다.\
앱의 배포 준비는 이걸로 끝입니다.!

배포에 대한 자세한 설명은 다음 링크를 참조하세요. [deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run eject`

**메모: 해당 작업을 수행하면 수행 전 상태로 되돌릴 수 없습니다.!**

create-react-app의 구성이 마음에 들지 않는다면 해당 명령어를 수행 후 설정 및 구성을 수정 할 수 있습니다. 이 명령은 단일 빌드 종속성을 제거합니다.

이 명령을 통해 프로젝트의 모든 설정파일 및 종속성(webpack, Babel, ESLint, etc)을 프로젝트 경로로 복사하여 사용자가 직접 제어 할 수 있도록 합니다. `eject`를 제외한 명령은 해당 명령 수행 후에도 사용이 가능하며 해당 명령은 복사된 프로젝트 내의 파일을 타겟으로 하도록 설정 됩니다.

`eject`명령을 사용 해야만 하는것은 아닙니다. create-react-app를 통해 구성 된 기능들이 마음에 들지 않는 경우에는 명령을 수행 후 커스터마이징 할 수 있습니다.

## 더 알아보기

Create React App에 대해 알아보기 [documentation](https://facebook.github.io/create-react-app/docs/getting-started).

React 관련 참조 [documentation](https://reactjs.org/).

### 코드 분할

코드 분할에 대한자료: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### 번들 크기 분석

번들 크기 분석에 대한 자료: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### app 생성 관련

app 생성 관련 자료: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### 고급 구성

고급 구성에 관한 자료: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### 배포

배포에 관한 자료: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` 실패 시

참고 자료: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
