import React, { Component } from 'react';
import Input from "../../../components/Form/Input";
import Card from "../../../components/Card";
import Close from "../../../components/Close";
import PropTypes from 'prop-types';
import RemoveBox from "../../../components/RemoveBox";
import {numberFormat} from "../../../services/helpers/helper";

// svg images
import plus from "../../../images/svg/plus.svg"
import minus from "../../../images/svg/minus-s.svg"
import left from "../../../images/svg/left-arrow.svg"
import {connect} from "react-redux";

const mapStateToProps = state => {
  const interfaces = state.interfaces;
  return  {interfaces}
};

class RightSidebar extends Component {
  static defaultProps = {
    carts: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      isShownCard: false,
      carts: [],
    };

    this.hideCart = this.hideCart.bind(this);
    this.showCart = this.showCart.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.sideBarCards !== state.carts) {
      // let $array = [];
      // props.carts.forEach( cart => {
      //   let $interface =  props.interfaces.find( item =>
      //       item.id === cart.interface_id
      //   )
      //   if( $interface ){
      //     $array[$interface.id]  = cart
      //   }else {
      //     $array[0] = cart
      //   }
      // })

      return {
        carts: props.carts,
      };
    }

    return null;
  }

  showCart() {
    this.setState({
      isShownCard: true,
    });
  }

  hideCart() {
    this.setState({
      isShownCard: false,
    });
  }

  render() {
    const {carts, isShownCard} = this.state;
    const {checkoutCallback, handleCartQuantityChangeCallback, removeCardByIdCallback, removeKonvaProductImageCallback} = this.props;
    const totalPrice = numberFormat(carts.reduce((totalPrice, cart) =>
        totalPrice + Number(cart.price) * cart.quantity,
        0))

    return (
      <div className={`h-100 right-side-bar position-fixed bg-white overflow-x-scroll default-scrollbar ${isShownCard ? 'show' : null}`}>
        <div className="d-flex align-items-center">
          <div className="cursor-pointer d-flex align-items-center border-bottom"  onClick={this.hideCart} >
            <img src={left} className="svg-icon" alt=""/>
            <h3 className="d-inline-block mb-0 ml-2">Cart</h3>
          </div>
          <button className="btn btn-primary ml-auto" onClick={checkoutCallback}>Checkout {totalPrice}</button>
        </div>
        {
          carts.map((cart, key) => (

              <div key={cart.id}>
                {
                  ( !cart.isBaseProduct ?
                      <span className="cart-interface-title"> { this.props.interfaces.find( item => item.id === cart.interface_id ).name } </span>
                      : '')
                }

                <Card className="mt-4" bodyClassName="bg-light-gray container" width={'100%'}
                      >
                  <div className="row">
                    <div className="col-6 h-100">
                      <span className="title"> {cart.product_title} </span>
                      <img src={cart.src} alt={cart.title} className="img-fluid"/>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-between">
                      <div className="d-flex align-items-center">
                        <img key={key} data-key={key} src={minus} onClick={(e) => {
                          const key = e.target.dataset.key;

                          this.setState((state) => {
                            if(state.carts[key].quantity) {
                              state.carts[key].quantity--
                            }
                            return state;
                          })
                        }} className="svg-icon mr-1 cursor-pointer" alt=""/>
                        <Input
                            className="d-inline-block form-inline"
                            inputClassName="border-none text-center input-right-slider"
                            labelClassName="d-inline-block text-right"
                            value={cart.quantity}
                            type="number"
                            min={0}
                            max={100}
                            onChange={(e) => handleCartQuantityChangeCallback(e, cart.id)}
                        />
                        <img data-key={key} src={plus} onClick={(e) => {
                          const key = e.target.dataset.key;

                          this.setState((state) => {
                            state.carts[key].quantity++

                            return state;
                          })
                        }} className="svg-icon mx-1 cursor-pointer" alt=""/>
                        <span className="text-right text-primary flex-grow-1"> { numberFormat(cart.price * cart.quantity) } </span>
                      </div>
                      {!cart.isBaseProduct &&
                      <button type="button" className="btn btn-outline-dark remove-basket" onClick={() => {
                        removeCardByIdCallback(cart.id);
                        removeKonvaProductImageCallback(cart.product_id);
                      }} >
                        Remove
                      </button> }
                    </div>
                  </div>
                </Card>
              </div>


          ))
        }
      </div>
    );
  }
}

RightSidebar.propTypes = {
  sideBarCards: PropTypes.array,
  hideCart: PropTypes.func,
  handleCartQuantityChangeCallback: PropTypes.func,
  removeCardById: PropTypes.func,
  removeKonvaProductImageCallback: PropTypes.func,
};

export default connect(mapStateToProps,null, null, {forwardRef: true})(RightSidebar)