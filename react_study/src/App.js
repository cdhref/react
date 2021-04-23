import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css'; 
import Main from "./container/Main"; 
import Home from "./container/Home"; 
import Viewer from "./container/Viewer";


function App() { 
  function changeStat(){
    var tempArr = [...a];
    tempArr[0] = 'newtxt1';
    tempArr[1] = 'newtxt2';
    tempArr[2] = 'newtxt3';
    setA(tempArr);
  }
  const [a, setA] = useState(['123', '456', '789']);
  return ( 
    <Router> 
      <div> 
        <Route exact path="/" component={Main} /> 
        <Route path="/home/:id" component={Home} /> 
        <Route path="/viewer/:episodeId" component={Viewer} /> 
        <div>{a[0]}</div>
        <div>{a[1]}</div>
        <div>{a[2]}</div>
        <div style={ {cursor:'pointer', color:'blue'} } onClick={ ()=>{changeStat()} }>click</div>
      </div> 
    </Router> 
  ); 
} 

export default App;
