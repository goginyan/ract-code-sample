import React, { Component } from 'react';
import PropTypes from "prop-types";

class RemoveBox extends Component {
  static defaultProps = {
    width: '25px',
    height: '25px',
    display: 'inline-block',
    className: '',
  }

  render() {
    const {className, width, height, display, onClick} = this.props;

    return (
      <span className={className} style={{width, height, display}} onClick={onClick}>
       <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"
            viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
        <path style={{fill: '#FF3636'}}
              d="M256,0C115.3,0,0,115.3,0,256s115.3,256,256,256s256-115.3,256-256S396.7,0,256,0z"/>
        <path style={{fill: '#F40000'}} d="M512,256c0,140.7-115.3,256-256,256V0C396.7,0,512,115.3,512,256z"/>
        <rect x="106" y="226" style={{fill: '#E7E7E7'}} width="300" height="60"/>
        <rect x="256" y="226" style={{fill: '#D3D3D8'}} width="150" height="60"/>
        </svg>
      </span>
    );
  }
}

RemoveBox.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  display: PropTypes.string,
};

export default RemoveBox;