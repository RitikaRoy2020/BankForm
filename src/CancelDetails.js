import React from 'react';

class CancelDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: null,
    }
  }

  nameChangeHandler = (event) => {
    this.setState({name: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    axios.delete('http://localhost:8080/test/delCustomer', {
      name: this.state.name
      })
      .then(response => alert("Are you want to delete?"));
  }

  render() {
    return(
      <form onSubmit = {this.submitHandler}>
        <h1>Enter your Name: </h1>
        <input
          type = "text"
          onChange = {this.nameChangeHandler}
          />
        <input
          type = "submit" />
      </form>
    );
  }
}