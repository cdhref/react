import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import Nav from "./common/Nav";
import SyntaxCompnent from "./page/SyntaxCompnent";
import SyntaxHooks from "./page/SyntaxHooks";

export default function App() { 
  return ( 
    <Router> 
      <Nav />
      <div className="content"> 
        <Route path="/SyntaxCompnent" component={SyntaxCompnent} /> 
        <Route path="/SyntaxHooks" component={SyntaxHooks} /> 
      </div> 
    </Router> 
  ); 
} 
