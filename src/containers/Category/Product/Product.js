import React, { Component } from 'react';
import IndexPage from "./IndexPage";
import ShowPage from "./ShowPage";
import './product.scss';
import PropTypes from "prop-types";

class Product extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.pageType === 'index') {
      return <IndexPage {...this.props}/>;
    } else if (this.props.pageType === 'show') {
      return <ShowPage {...this.props}/>;
    }
  }
}

Product.propTypes = {
  pageType: PropTypes.string.isRequired,
};

export default Product;
