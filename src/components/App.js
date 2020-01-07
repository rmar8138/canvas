import React, { Component } from "react";
import Canvas from "./Canvas";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to your drawing pad</h1>
        <Canvas />
      </div>
    );
  }
}
