import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import classproject from './components/classproject.component';
import about from './components/About.component';
import Navbar from './components/Navbar.component';
import queries from './components/queries.component';
import results from './components/results.components';
// Current place... Need to find where he adds them together. might be the third link in the comments. 
//https://youtu.be/7CqJlxBYj-M?t=5023
//https://www.robinwieruch.de/react-fetching-data#how-to-fetch-data-with-axios-in-react
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Route path="/" exact component={classproject} />
      <Route path="/about" component ={about} />
      <Route path="/ourqueries" component ={queries} />
      <Route path="/results" component = {results} />
      </div>
    </Router>
  );
}

export default App;
