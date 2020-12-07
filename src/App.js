import React from 'react';
import Home from './Home.js';
//import index from './index.js';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
   
import About from './About.js';
import Contact from './Contact.js';

export default class App extends React.Component {
  render(){
    return(
      <Router>
        <div className= "index">
          <ul>
            <li>
              <Link to="/Home">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>

          <switch>
          <Route path= '/home'>
            <Home />
          </Route>
          <Route path= '/about'>
            <About />
          </Route>
          <Route path= '/contact'>
            <Contact />
          </Route>
          </switch>
        </div>
      </Router>
    );
  }
}