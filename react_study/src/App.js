import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css'; 
import Nav from "./container/Nav";
import SyntaxCompnent from "./page/SyntaxCompnent";
import SyntaxHooks from "./page/SyntaxHooks";

function App() { 
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

export default App;
