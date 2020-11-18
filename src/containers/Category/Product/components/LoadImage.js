import React, { Component } from 'react';
import { Image } from "react-konva";

class LoadImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };
  }

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }

  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }

  loadImage() {
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener('load', this.handleLoad);
  }

  handleLoad = () => {
    this.setState({
      image: this.image
    });
  };

  render() {
    return (
      <Image
        name={this.props.name}
        image={this.state.image}
        x={this.props.x}
        y={this.props.y}
        opacity={this.props.opacity}
        onClick={this.props.clickCallback}
        onMouseEnter={this.props.onMouseEnterCallback}
        onMouseLeave={(e) => this.props.onMouseLeaveCallback(e)}
        ref={node => {
          this.imageNode = node;
        }}
      />
    );
  }
}

export default LoadImage;
