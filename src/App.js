import React, { Component } from "react";
import People from "./People";
import AddPersonCard from "./AddPersonCard";

class App extends Component {
  state = {
    people: [
      { name: "João", age: 30, city: "Lisbon", id: 1 },
      { name: "Maria", age: 20, city: "Porto", id: 2 },
      { name: "Crystal", age: 25, city: "Viana", id: 3 },
    ],
  };
  addPerson = (person) => {
    person.id = Math.random();
    let newarray = [...this.state.people, person];
    this.setState({
      people: newarray,
    });
  };
  render() {
    return (
      <div className="App">
        <h1> List of People</h1>
        <p> Submit your profile information</p>
        <People people={this.state.people} />
        <AddPersonCard addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
