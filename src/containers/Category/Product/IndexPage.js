import React, { Component } from 'react';
import Card from "../../../components/Card";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './product.scss';

class IndexPage extends Component {
  static defaultProps = {
    products: [],
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

  getProductFirstImage(product) {
    const firstIndex = 0;
    return product.variants[firstIndex] ? product.variants[firstIndex].src : '';
  }

  render() {
    return (
      <div className="container-fluid index-product">
        <div className="row">
          {this.props.products.map(product =>
            <div className="col-lg-3 col-md-6 col-12 product mt-3" key={product.id}>
              <Link to={`/category/${this.props.categoryId}/product/${product.id}`}
                    style={{textDecoration: 'none', color: '#000000'}} className="d-inline-block">
                <Card
                  className="product-card"
                  img={this.getProductFirstImage(product)}
                  header={product.title}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {
  products: PropTypes.array,
  categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default IndexPage;
