import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css'; 
import Stntax from "./container/Syntax";

function App() { 
  return ( 
    <Router> 
      <div> 
        <a href="/Stntax">examRander</a>
        <Route path="/Stntax" component={Stntax} /> 
        
      </div> 
    </Router> 
  ); 
} 

export default App;
