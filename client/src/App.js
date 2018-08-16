import React, { Component } from 'react';
import './App.css';
import Restaurants from './components/Restaurants';
import UusiRavintola from './components/UusiRavintola';
import NavBar from './components/CustomNavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
 
      <Router>
      <div>
      <NavBar />
      <Route exact path="/" component={Restaurants} />
      <Route exact path="/uusi" component={UusiRavintola} />
      </div>
    </Router> 
    );
  }
}

export default App;
