import React, { Component } from "react";

export default class ColourSelector extends Component {
  render() {
    const { hex, onColourSelectorChange } = this.props;

    return (
      <div>
        <input type="color" value={hex} onChange={onColourSelectorChange} />
      </div>
    );
  }

  static defaultProps = {
    hex: "#ffffff"
  };
}
