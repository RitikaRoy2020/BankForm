import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import axios from 'axios';

export default class Form1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cusid: null,
      name: null,
      age: null,
      address: null,
      num: null,
    }
  }

  nameChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/test/customer', {
      name: this.state.name
    })
    .then(response => alert(response.body));
  }

  render() {
    return(
      <form onSubmit = {this.submitHandler}>
        <h1>Hello</h1>
        <p>Enter your name: </p>
        <input
          type = "text"
          onChange = {this.nameChangeHandler}
          />
        <p>
          <input type='submit' />
        </p>
      </form>
    );
  }
}

ReactDOM.render(
  < Form1/>,
  document.getElementById('root')
);