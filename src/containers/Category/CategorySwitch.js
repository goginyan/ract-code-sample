import React, { Component } from 'react';
import Category from "./Category";
import PropTypes from 'prop-types';

class CategorySwitch extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <Category />;
  }
}

CategorySwitch.propTypes = {
  pageType: PropTypes.string,
};

export default CategorySwitch;