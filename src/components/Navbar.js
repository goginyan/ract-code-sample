import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from "../images/svg/logo.svg";
import menu from "../images/svg/menu.svg";
import add from "../images/svg/add.svg";
import minus from "../images/svg/minus.svg";
import sort from "../images/svg/sort.svg";
import add_alternative from "../images/svg/add_alternative.svg";
import custom from "../images/svg/custom.svg";
import message from "../images/svg/message.svg";
import transfer from "../images/svg/transfer.svg";

import '../sass/menu.scss'
import {connect} from "react-redux";
import {getSelectedProduct} from "../redux/selectors";
import {addCategories} from "../redux/actions";

import * as categoryApi from "../services/api/categoryApi";
import Basket from "./Basket";

const mapStateToProps = state => {
    const product = getSelectedProduct(state);
    const categories = state.categories.list ? state.categories.list : {};
    const baskets = state.baskets.list;
    const rightSidebarRef =state.components.list.rightSidebar?state.components.list.rightSidebar:{};
    return {product, categories, baskets, rightSidebarRef};
};

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu_open: false,
            menu_items: [],
        };


        this.handleCardButtonClick = this.handleCardButtonClick.bind(this);
    }

    handleCardButtonClick() {
        this.props.rightSidebarRef.current ? this.props.rightSidebarRef.current.showCart(): alert('cart is empty');
    }

    componentDidMount() {
        const self = this;

        categoryApi.index().then((categories) => {
            this.props.addCategories(categories);
        });

        window.addEventListener('click', function (e) {

            if (!e.target.closest('.menu-list') && !e.target.closest('.menu-btn')) {
                self.setState(state => {
                    state.menu_open = false;
                    return state;
                })
            }if (!e.target.closest('.right-side-bar') && !e.target.closest('.basket') && !e.target.closest('.remove-basket')) {
                self.props.rightSidebarRef.current && self.props.rightSidebarRef.current.hideCart();
            }
        })
    }

    checkMenuItemsSelect(key) {
        return this.state.menu_items.indexOf(key) === -1
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">

                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ml-2 mr-2 d-flex">
                        <button onClick={() => this.setState((state) => {
                            state.menu_open = !state.menu_open;
                            return state;
                        })} className="menu-btn">
                            <img src={menu} width={35} alt=""/>
                        </button>
                        <div className={`menu-list default-scrollbar ${this.state.menu_open && 'show'}`}>
                            {/*{this.props.categories.length ? (*/}
                            {/*    <ul className="list-unstyled pl-3">*/}
                            {/*        {*/}
                            {/*            this.props.categories.map((item, key) => (*/}
                            {/*                    <li onClick={() => this.setState((state) => {*/}
                            {/*                        if (this.checkMenuItemsSelect(key)) {*/}
                            {/*                            state.menu_items.push(key)*/}
                            {/*                        } else state.menu_items.splice(state.menu_items.indexOf(key), 1);*/}
                            {/*                        return state;*/}

                            {/*                    })}*/}
                            {/*                        key={key}*/}
                            {/*                        className={`p-2 text-uppercase cursor-pointer ${!item.products.length ? 'disabled' : null}`}>*/}
                            {/*                    <span className="d-flex align-items-center">*/}
                            {/*                        {item.products.length ? (*/}
                            {/*                            this.checkMenuItemsSelect(key) ? (*/}
                            {/*                                <img src={add} width={20} alt=""/>*/}
                            {/*                            ) : (<img src={minus} width={20} alt=""/>)*/}

                            {/*                        ) : null}*/}
                            {/*                        <span className="pl-3"> {item.name} </span>*/}
                            {/*                        {item.products.length ? (*/}
                            {/*                            <span className="pl-3 show-all"> show all </span>) : null}*/}
                            {/*                    </span>*/}
                            {/*                        {item.products.length ?*/}
                            {/*                            (*/}
                            {/*                                <ul className={`list-unstyled item-lists menu-products ${(this.state.menu_items.indexOf(key) !== -1) && 'show'}`}>*/}
                            {/*                                    {*/}
                            {/*                                        item.products.map((product, key) => (*/}
                            {/*                                            <li key={key} className="media">*/}
                            {/*                                                <Link*/}
                            {/*                                                    onClick={() => this.setState((state) => {*/}
                            {/*                                                        state.menu_open = !state.menu_open;*/}
                            {/*                                                        return state;*/}
                            {/*                                                    })}*/}
                            {/*                                                    to={`/category/${item.id}/product/${product.id}`}*/}
                            {/*                                                    style={{textDecoration: 'none'}}*/}

                            {/*                                                    className="d-inline-block">*/}
                            {/*                                                    <div className="media-body">*/}
                            {/*                                                        <img className="img-product"*/}
                            {/*                                                             src={product.variants[0] ? product.variants[0].src : null}*/}
                            {/*                                                             alt=""/>*/}
                            {/*                                                        <span*/}
                            {/*                                                            className="mt-0 mb-1">{product.title}</span>*/}
                            {/*                                                    </div>*/}
                            {/*                                                </Link>*/}
                            {/*                                            </li>*/}
                            {/*                                        ))*/}
                            {/*                                    }*/}
                            {/*                                </ul>*/}
                            {/*                            ) : null}*/}

                            {/*                    </li>*/}
                            {/*                )*/}
                            {/*            )*/}
                            {/*        }*/}
                            {/*    </ul>*/}
                            {/*) : null}*/}

                            <ul className="list-unstyled pl-3">
                                <li className={`p-2 text-uppercase cursor-pointer`}>
                                    <span className="d-flex align-items-center">
                                        <img src={sort} width={20} alt=""/>
                                        <a href="https://umbrellaarmory.eu/pages/armory" className="pl-3"> Armory </a>
                                    </span>
                                </li>
                                <li className={`p-2 text-uppercase cursor-pointer disabled`}>
                                    <span className="d-flex align-items-center">
                                        <img src={add} width={20} alt=""/>
                                        <a  className="pl-3"> Project </a>
                                    </span>
                                </li>
                                <li className={`p-2 text-uppercase cursor-pointer`}>
                                    <span className="d-flex align-items-center">
                                        <img src={add_alternative} width={20} alt=""/>
                                        <a href="https://umbrellaarmory.eu/pages/ownership" className="pl-3"> Ownership </a>
                                    </span>
                                </li>
                                <li className={`p-2 text-uppercase cursor-pointer`}>
                                    <span className="d-flex align-items-center">
                                        <img src={custom} width={20} alt=""/>
                                        <a href="https://umbrellaarmory.eu/pages/Custom" className="pl-3"> Custom </a>
                                    </span>
                                </li>
                                <li className={`p-2 text-uppercase cursor-pointer`}>
                                    <span className="d-flex align-items-center">
                                        <img src={message} width={20} alt=""/>
                                        <a href="https://umbrellaarmory.eu/pages/support" className="pl-3"> Contact </a>
                                    </span>
                                </li>
                                <li className={`p-2 text-uppercase cursor-pointer`}>
                                    <span className="d-flex align-items-center">
                                        <img src={transfer} width={20} alt=""/>
                                        <a href="https://umbrellaarmory.eu/pages/distribution" className="pl-3"> Wholesale </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/`} className="navbar-brand">
                            <img src={logo} className="img-fluid" width={80} alt=""/>
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {
                            this.props.product.title ? (
                                <span className="product-name"> {this.props.product.title}</span>
                            ) : null
                        }
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                         <span onClick={this.handleCardButtonClick}
                               className="text-dark show-card-button cursor-pointer">
                                  <Basket carts={this.props.baskets}/>
                          </span>
                    </li>
                </ul>
            </nav>
        );
    }
}


export default connect(mapStateToProps, {addCategories})(Navbar);
