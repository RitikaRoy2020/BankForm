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

  ageChangeHandler = (event) => {
    this.setState({age: event.target.value});
  }

  addressChangeHandler = (event) => {
    this.setState({address: event.target.value});
  }

  phnumChangeHandler = (event) => {
    this.setState({num: event.target.value});
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
        <select value = {this.state.cusid}>
          <option value = "01">Customer Id: 01</option>
          <option value = "02">Customer Id: 02</option>
          <option value = "03">Customer Id: 03</option>
        </select>
        <h1>Enter Your Details</h1>
        <p>Enter your name: </p>
        <input
          type = "text"
          onChange = {this.nameChangeHandler}
        />
        <p>Enter your age: </p>
        <input
          type = "text"
          onChange = {this.ageChangeHandler}
        />
        <p>Enter your address: </p>
        <input
          type = "text"
          onChange = {this.addressChangeHandler}/>
        <p>Enter your Phone Number</p>
        <input
          type = "text"
          onChange = {this.phnumChangeHandler}/>
        <p>
          <link rel= "stylesheet" type="text/css" href= "index.css"></link>
          <button type= "button">submit</button>
        </p>
      </form>
    );
  }
}

ReactDOM.render(
  < Form1/>,
  document.getElementById('root')
);

//ReactDOM.render(document.getElementById('source'));