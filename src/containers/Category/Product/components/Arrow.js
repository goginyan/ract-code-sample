import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Arrow extends Component {
  static defaultProps = {
    arrowSide: 'left',
  }

  renderRightArrow() {
    return (
      <span className="slider-right-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
             viewBox="0 0 31.494 31.494" xmlSpace="preserve">
          <path
            d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554  c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587  c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
        </svg>
     </span>
    );
  }

  renderLeftArrow() {
    return (
      <span className="slider-left-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
             viewBox="0 0 31.49 31.49" xmlSpace="preserve">
          <path style={{fill: '#1E201D'}}
                d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"/>
        </svg>
      </span>
    );
  }

  render() {
    const {className, style, onClick} = this.props;

    return (
      <div
        className={className}
        style={{...style, display: "block", color: "#979797", background: '#000'}}
        onClick={onClick}
      />
    );
  }
}

Arrow.propTypes = {
  arrowSide: PropTypes.string,
};

export default Arrow
