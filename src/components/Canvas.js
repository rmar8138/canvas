import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

export default class Canvas extends Component {
  state = {
    hex: "#ffffff",
    coords: null,
    height: 400,
    width: 400
  };

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.context = null;
  }

  componentDidMount() {
    console.log(this.canvasRef);
  }

  componentDidUpdate() {
    // whenever state updates (i.e someone selects a new colour),
    // update the context
    this.setContext();
  }

  setContext = () => {
    this.context = this.canvasRef.current.getContext("2d");
    this.context.strokeStyle = this.state.hex; // colour of pen
    this.context.lineJoin = "round"; // how we draw (square or round edges?)
    this.context.lineWidth = 3; // thickness of pen
  };

  onColourSelectorChange = event => {
    this.setState({ hex: event.target.value });
  };

  onCanvasMouseDown = event => {
    // user starts drawing
    // track coords when user clicks on canvas
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    this.setState({ coords: [x, y] });
  };

  onCanvasMouseUp = () => {
    // user finishes drawing
    this.setState({ coords: null });
  };

  onCanvasMouseMove = event => {
    // get new coords and draw a line between new
    // and old coords
    const { coords, height, width } = this.state;
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    if (x > 0 && x < width && y > 0 && y < height) {
      // check if mouse is within canvas
      // only draw if there are coords
      if (coords) {
        this.context.beginPath();
        this.context.moveTo(coords[0], coords[1]);
        this.context.lineTo(x, y);
        this.context.closePath();
        this.context.stroke();
        this.setState({ coords: [x, y] });
      }
    } else {
      // stop drawing
      this.setState({ coords: null });
    }
  };

  render() {
    const { hex, width, height } = this.state;

    return (
      <div>
        <div>
          <ColourSelector
            onColourSelectorChange={this.onColourSelectorChange}
            hex={hex}
          />
        </div>
        <canvas
          width={width}
          height={height}
          style={{
            border: "6px solid black"
          }}
          ref={this.canvasRef}
          onMouseMove={this.onCanvasMouseMove}
          onMouseDown={this.onCanvasMouseDown}
          onMouseUp={this.onCanvasMouseUp}
        />
      </div>
    );
  }
}
