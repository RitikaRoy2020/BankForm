import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Create from './Create';
import CancelDetails from './CancelDetails';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
   
import About from './About.js';
import Contact from './Contact.js';

function Bank() {
  return (
    <h2 className="bank">Bank</h2>
  )
}

function Default() {
    return(
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/Create">Create</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/CancelDetails">CancelDetails</Link>
            </li>
          </ul>

          <Switch>
          <Route path= "/Create">
            <Create />
          </Route>
          <Route path= "/about">
            <About />
          </Route>
          <Route path= "/contact">
            <Contact />
          </Route>
          <Route path = "/CancelDetails">
            <CancelDetails />
          </Route>
          </Switch>
        </div>
      </Router>
    );
  }

ReactDOM.render(
  <Default />,
  document.getElementById('root')
);