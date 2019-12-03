import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "huh",
      list: [
        "learn react",
        "add animations to project",
        "practice my css skills"
      ]
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }

  handleSubmit() {
    this.setState({
      userInput: "",
      list: [...this.state.list, this.state.userInput]
    });
  }

  render() {
    const todoList = this.state.list.map((item, index) => {
      return (
        <div className="">
          <p key={index}>{item}</p>
        </div>
      );
    });

    return (
      <div className="App">
        <h1> My todo app</h1>
        <input
          value={this.state.userInput}
          placeholder="Type new todo..."
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
        {todoList}
      </div>
    );
  }
}

export default App;


