import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  static defaultProps = {
    title: null,
    link: null,
    img: null,
    cardStyle: null,
    className: '',
    bodyClassName: '',
  };

  render() {
    const {width, header, children, img, title, link, className, bodyClassName} = this.props;

    return (
      <div className={`card ${className}`} style={{width}}>


        {img && <img className="card-img-top img-fluid"
                     src={typeof img === 'string' ? img : img.src}
                     alt={img.alt || ''}/>}

        {children && <div className={`card-body ${bodyClassName}`}>
          {title && <h5 className="card-title">{title}</h5>}

          {children}

          {link && <a href={link.href} className="btn btn-primary">{link.text}</a>}
        </div>}

          {header && <div className="p-3">
              {header}
          </div>}
      </div>
    );
  }
}

Card.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
};

export default Card;