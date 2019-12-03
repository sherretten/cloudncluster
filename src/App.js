import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import classproject from './components/classproject.component';
import about from './components/About.component';
import Navbar from './components/Navbar.component';
import queries from './components/queries.component';
// Current place... Need to find where he adds them together. might be the third link in the comments. 
//https://youtu.be/7CqJlxBYj-M?t=3345
function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <Route path="/" exact component={classproject} />
      <Route path="/about" component ={about} />
      <Route path="/ourqueries" component ={queries} />
      </div>
    </Router>
  );
}

export default App;
