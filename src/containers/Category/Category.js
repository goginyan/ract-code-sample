import React, { Component } from 'react';
import * as categoryApi from "../../services/api/categoryApi";
import './category.scss';
import Product from "./Product";
import Select from 'react-select'
import { addCategories } from "../../redux/actions";
import connect from "react-redux/es/connect/connect";

const mapStateToProps = state => {
    const categories = state.categories.list ? state.categories.list : {};
    return { categories };
};
class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.categories ? this.props.categories :{},
      category: this.props.categories.length ? this.props.categories[0]: {
        products: [],
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
      // You don't have to do this check first, but it can help prevent an unneeded render
      if (nextProps.categories) {
          this.setState(state => {
              state.categories = nextProps.categories;
              state.category = nextProps.categories[0]
          });
      }
  }
  // componentDidMount() {
  //     this.setState(state => {
  //         state.categories =  this.props.categories ? this.props.categories :{};
  //         state.category = this.props.categories.length ?this.props.categories: {
  //             products: [],
  //         }
  //     });
  // }

  handleClick(category) {
    this.setState({category});
  }

  render() {
    return (
      <div className="container-fluid my-2 category">
        <div className="row justify-content-center align-items-center">
            <div className="w-25 h-100">
                <Select
                        options={this.state.categories}
                        value={this.state.category}
                        onChange={(category) => this.handleClick(category)}
                        getOptionLabel={option =>`${option.name}`}
                        getOptionValue={option => `${option.name}`}
                         />
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            {this.state.category.products.length ?
              <Product pageType="index"
                       products={this.state.category.products}
                       categoryId={this.state.category.id}/>
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
    mapStateToProps
)(Category);