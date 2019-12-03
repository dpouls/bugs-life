import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      num: Math.random()
    };
  }

  render() {
    return (
      <div className="">
        <h3>My random number: </h3>
        {this.state.num}
        <br />
        <br />
        <button onClick={() => this.setState({num: Math.floor(Math.random()*100)})}>
          Generate new random number
        </button>
      </div >
    );
  }
}
