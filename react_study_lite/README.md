# 개발환경 설정
1. node.js 설치
2. npm init
3. npm i react react-dom
4. npm i -D webpack webpack-cli
5. webpack.config.js파일 생성
6. npm i -D @babel/core @babel/preset-env @babel/preset-react
7. npm i babel-loader


# webpack.config.js 
__중요! git에 등록 된 파일 참조해서 설정 할 것__

> module > options > presets > @babel/preset-env  
다음과 같이 설정 가능.

> presets: ['@babel/preset-env'],  
위처럼 설정 할 경우 어떤 브라우저에서도 동작 하도록 설정 됨.
이 경우 빌드 시 무거워지므로 다음과 같은 설정이 가능

>presets: [
>    [
>        '@babel/preset-env', {
>            targets:{
>                browsers: ['last 2 chrome versions'],
>            },
>        },
>    ],
>],

browsers에 작성 가능한 목록은 다음 링크에서 확인 가능.
https://github.com/browserslist/browserslist#full-list


https://github.com/browserslist/browserslist#full-list