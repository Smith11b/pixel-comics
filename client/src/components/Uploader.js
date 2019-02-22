import { Component } from "react";

import pixelate from "../lib/canvas";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export default class Uploader extends Component {
  constructor() {
    super();
    this.input = null;
    this.canvas = null;
    this.state = {
      src: null
    };
  }
  setCanvasRef = canvas => (this.canvas = canvas);
  setRef = input => (this.input = input);
  getInput = () => this.input;
  getCanvas = () => this.canvas;

  handleUpload = () => {
    if (this.input.files[0])
      getBase64(this.getInput().files[0]).then(encoded =>
        this.setState(
          {
            src: encoded
          },
          () => {
            pixelate(this.canvas, this.state.src);
          }
        )
      );
  };

  render() {
    return this.props.children({
      setCanvasRef: this.setCanvasRef,
      setRef: this.setRef,
      input: this.input,
      getInput: this.getInput,
      handleUpload: this.handleUpload,
      src: this.state.src
    });
  }
}
