import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Daniel', age: 28 },
      { name: 'Evan', age: 15 },
      { name: 'Sara', age: 21 }
    ],
    otherStats: 'Other stats untouchble'
  }

  switchNameHandler = () => {
    // console.log('Click')
    this.setState({
      persons: [
        { name: 'Daniel Zanata', age: 28 },
        { name: 'Evan', age: 15 },
        { name: 'Sara', age: 24 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
