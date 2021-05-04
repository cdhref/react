import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import ReactDom from 'react-dom';
import './assets/css/client.css';
import Nav from './src/common/nav';
import WordPlay from './src/wordPlay';
import NumBaseBall from './src/numBaseBall';
import ReactionSpeedCheck from './src/reactionSpeedCheck';
import Lotto from './src/lotto';
import MineSearch from './src/mineSearch';

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


// CSS 적용
webpack.config.js > module > rules에 다음 내용 추가
{
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
},
*/ 

//ReactDom.render(<WordPlay />, document.querySelector('#root'));
//ReactDom.render(<NumBaseBall />, document.querySelector('#root'));
ReactDom.render(
    (
    <Router>
        <Nav />
        <div className="content">
            {/* Router사용 시 webpack.config.js > devServer > historyApiFallback: true 추가 할 것 */}
            <Route path="/wordPlay" component={WordPlay} />
            <Route path="/numBaseBall" component={NumBaseBall} />
            <Route path="/lotto" component={Lotto} />
            <Route path="/reactionSpeedCheck" component={ReactionSpeedCheck} />
            <Route path="/reactionSpeedCheck" component={ReactionSpeedCheck} />
            <Route path="/mineSearch" component={MineSearch} />
        </div>
    </Router>
    ),
    document.querySelector('#root')
)
