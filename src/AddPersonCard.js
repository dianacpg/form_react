import React, { Component } from "react";

class AddPersonCard extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPerson(this.state);
  };
  render() {
    return (
      <div className="submit">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name"> Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="name"> City:</label>
          <input type="text" id="city" onChange={this.handleChange} />
          <button> Submit </button>
        </form>
      </div>
    );
  }
}

export default AddPersonCard;
