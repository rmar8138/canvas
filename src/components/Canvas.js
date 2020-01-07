import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

export default class Canvas extends Component {
  state = {
    hex: "#ffffff"
  };

  onColourSelectorChange = event => {
    this.setState({ hex: event.target.value });
  };

  render() {
    const { hex } = this.state;

    return (
      <div>
        <ColourSelector
          onColourSelectorChange={this.onColourSelectorChange}
          hex={hex}
        />
      </div>
    );
  }
}
