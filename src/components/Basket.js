import React, {Component} from 'react';
import PropTypes from "prop-types";
import './basket.scss';
import {numberFormat} from "../services/helpers/helper";


class Basket extends Component {
    static defaultProps = {
        className: 'basket',
        carts: []
    };

    constructor(props) {
        super(props);

        this.state = {
            className: 'basket',
            carts: [],
            sumPrice: 0,
        };

    }

    static getDerivedStateFromProps(props, state) {
        if (props.carts !== state.carts) {
            return {
                carts: state.carts,
                className: 'basket',
                sumPrice: numberFormat(props.carts.reduce(function (a, b) {
                    return a + b.price;
                }, 0))
            };
        }

        return state;
    }

    render() {
        const {className, onClick} = this.props;

        return (
            <span className={className} onClick={onClick}>
       <span>
         <svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
         <g><path
             d="m472 452c0 11.046-8.954 20-20 20h-20v20c0 11.046-8.954 20-20 20s-20-8.954-20-20v-20h-20c-11.046 0-20-8.954-20-20s8.954-20 20-20h20v-20c0-11.046 8.954-20 20-20s20 8.954 20 20v20h20c11.046 0 20 8.954 20 20zm0-312v192c0 11.046-8.954 20-20 20s-20-8.954-20-20v-172h-40v60c0 11.046-8.954 20-20 20s-20-8.954-20-20v-60h-192v60c0 11.046-8.954 20-20 20s-20-8.954-20-20v-60h-40v312h212c11.046 0 20 8.954 20 20s-8.954 20-20 20h-232c-11.046 0-20-8.954-20-20v-352c0-11.046 8.954-20 20-20h60.946c7.945-67.477 65.477-120 135.054-120s127.109 52.523 135.054 120h60.946c11.046 0 20 8.954 20 20zm-121.341-20c-7.64-45.345-47.176-80-94.659-80s-87.019 34.655-94.659 80z"/></g></svg>
       </span>
                <span className="basket-price">{this.state.sumPrice !== 0 && this.state.sumPrice}</span>
      </span>
        );
    }
}

Basket.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default Basket;