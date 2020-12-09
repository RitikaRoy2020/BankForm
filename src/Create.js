import React from 'react';
import axios from 'axios';

export default class Create extends React.Component {
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
        name: this.state.name,
        age: this.state.age,
        address: this.state.address,
        num: this.state.num
      })
      .then(response => alert("Are you want to submit the details?"));
    }
  
    render() {
      return(
        <form onSubmit = {this.submitHandler}>
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
            <input type= "submit"/>
            </p>
        </form>
      );
    }
  }