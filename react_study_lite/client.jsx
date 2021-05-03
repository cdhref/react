import React from 'react';
import ReactDom from 'react-dom';
import WordPlay from './src/wordPlay';
import NumBaseBall from './src/numBaseBall';

/* 
react module을 사용하는 3가지 방법

1. 직접 html에서 참조
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js" />
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" />

2. require함수를 이용한 참조
const React = require('react');
const ReactDom = require('react-dom');

3. import
import React from 'react';
import ReactDom from 'react-dom';

*/ 

//ReactDom.render(<WordPlay />, document.querySelector('#root'));
ReactDom.render(<NumBaseBall />, document.querySelector('#root'));