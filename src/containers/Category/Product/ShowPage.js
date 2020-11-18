import React, {Component, createRef} from 'react';
import './product.scss';
import {getResponsiveKonvaSizes} from "../../../services/helpers/screen";
import * as productApi from '../../../services/api/productApi';
import LoadImage from "./components/LoadImage";
import {Layer, Stage} from "react-konva";
import {findSelectedOrFirst} from "./helper-actions";
import RightSidebar from "./RightSidebar";
import Client from 'shopify-buy';
import { numberFormat }from "../../../services/helpers/helper";

import Input from "../../../components/Form/Input";

import {addSelectProducts,addBaskets, addRef, addInterfaces} from "../../../redux/actions";
import {connect} from "react-redux";
import dot from '../../../images/svg/dot.svg';


import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, Mousewheel} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);


class ShowPage extends Component {
    constructor(props) {
        super(props);
        // const konvaSizes = getResponsiveKonvaSizes();
        this.state =    this.initialState;

        this.existsProductPlusPounts = false;

        this.interfacesSwiper = createRef();
        this.productsSwiper = createRef();
        this.rightSidebarRef = createRef();
        this.konvaStage = createRef();

        this.setResponsiveKonvaProduct = this.setResponsiveKonvaProduct.bind(this);
        this.handlePlugItemVariantChange = this.handlePlugItemVariantChange.bind(this);
        this.handleCartQuantityChange = this.handleCartQuantityChange.bind(this);
        this.removeKonvaProductImage = this.removeKonvaProductImage.bind(this);
        this.removeProductPlusPoints = this.removeProductPlusPoints.bind(this);
        this.handleRangePlugSlider = this.handleRangePlugSlider.bind(this);
        this.addProductImage = this.addProductImage.bind(this);
        this.shopifyRedirect = this.shopifyRedirect.bind(this);
        this.removeCardById = this.removeCardById.bind(this);

    }

    get initialState() {

        const konvaSizes = getResponsiveKonvaSizes();


        return {
            baseProduct: {},
            selectedProduct: null,
            plugs: [],
            plugSliderCurrentIndex: 0,
            productSliderCurrentIndex: 0,
            selectedPlug: {
                products: [],
                interfaces: [],
            },
            productKonva: {
                stage: {
                    scale: konvaSizes.scale,
                    offset: konvaSizes.offset,
                    width: konvaSizes.width,
                    height: konvaSizes.height,
                },
                images: [],
            },
            sideBarCarts: [],
            productsSwiper: {
                next: {
                    right: 0
                },
                prev: {
                    left: 0
                }
            }
        };
    }

    shopifyRedirect() {
        const client = Client.buildClient({
            domain: 'uniq-unitcode.myshopify.com',
            storefrontAccessToken: 'd927fe56a95cd4f50e18f1f46ed25258'
        });



        const shopifyData = this.state.sideBarCarts.map(
            (variant) => ({variantId: variant.shopify_id, quantity: variant.quantity})
        );
       let checkoutId = '';
       client.checkout.create().then((checkout) => {
           checkoutId = checkout.id;
           client.checkout.addLineItems(checkoutId, shopifyData).then(() => {
               client.checkout.fetch(checkoutId).then((checkout) => {
                   window.location.assign(checkout.webUrl);
               });
           }).catch((err) => {
               if (err) {
                   alert('There is an error to connect with shopify. Please try after some time.');
               }
           });
       })

    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setState(this.initialState);
            this.prepareData(nextProps).then(() => {
                this.setResponsiveKonvaProduct()
                this.setPositionProductSwiperBtn()
                this.setSelectedPlug(this.state.selectedPlug)
            });
        }

    }

    componentDidMount() {
        this.prepareData().then(() => {
            this.setResponsiveKonvaProduct()
            this.setSelectedPlug(this.state.selectedPlug)
        });

        // .products-swiper .swiper-button-next

        if (this.productsSwiper.current.swiper) {
            let parent_detals = this.productsSwiper.current.getBoundingClientRect();
            this.setPositionProductSwiperBtn(parent_detals.width)
            this.productsSwiper.current.swiper.on('resize', () => {
                let parent_detals = this.productsSwiper.current.getBoundingClientRect();
                this.setPositionProductSwiperBtn(parent_detals.width)
            })

        }


        this.setResponsiveKonvaProduct();

        window.addEventListener('resize', this.setResponsiveKonvaProduct);

    }

    setPositionProductSwiperBtn() {
        if(this.productsSwiper.current.swiper){
            const swiper = this.productsSwiper.current.swiper,
                width = swiper.width,
                slide_width = 365,
                position = width / 2 - (slide_width / 2) - 44;

            this.setState((state) => {
                state.productsSwiper.prev.left = position + 'px';
                state.productsSwiper.next.right = position + 'px';
                return state;
            })
        }
    }

    componentDidUpdate() {

        // todo: change this  event  on state change
        this.props.addBaskets(this.state.sideBarCarts);

        this.props.addRef('rightSidebar', this.rightSidebarRef)

        // this.setResponsiveKonvaProduct()
    }

    componentWillUnmount() {
        this.props.addSelectProducts({});
        this.props.addBaskets([]);
        window.removeEventListener('resize', this.setResponsiveKonvaProduct);
    }

    setProductPlusPoints() {
        this.existsProductPlusPounts = true;

        this.setState((state) => {
            state.plugs.forEach((plug) => {
                const plugProduct = plug.products.find(
                    product => product.id === this.state.baseProduct.id
                );
                const coordinates = {
                    x: this.state.baseProduct.width * ((plugProduct.pivot.coordinate_x) / 100),
                    y: this.state.baseProduct.height * ((plugProduct.pivot.coordinate_y) / 100),
                };

                const isBusyPlug = state.productKonva.images.find((konvaImage) => konvaImage.category === plug.name);

                if (!isBusyPlug) {
                    state.productKonva.images.push({
                        id: plug.id,
                        plugName: plug.name,
                        type: 'plus',
                        src: dot,
                        width: plug.interfaces[0] ? plug.interfaces[0].width :0,
                        height: plug.interfaces[0] ? plug.interfaces[0].height :0,
                        x: coordinates.x,
                        y: coordinates.y,
                    });
                }
            });

            return state;
        });
    }

    removeProductPlusPoints() {
        this.existsProductPlusPounts = false;

        this.setState((state) => {
            state.productKonva.images = state.productKonva.images.filter(
                (image) => image.type !== 'plus'
            );

            return state;
        });
    }

    setResponsiveKonvaProduct() {
        if(this.state.baseProduct) {
            const parent = document.getElementById('stage').getClientRects()[0],
                  scale_constant = 1.52222;

            let parent_width = parent.width;
            let parent_height = parent.height;

            let product_width = this.state.baseProduct.width + 1800;
            let product_height = this.state.baseProduct.height + 700;

            let scale =((parent_width ) / product_width) / scale_constant;

            if( (product_height * scale)  > parent_height) {
                scale =  ((parent_height / product_height)) / scale_constant;
            }

            let offsetX = parent_width/scale/2 - (this.state.baseProduct.width/2)*scale_constant ;//(parent_width/scale) / 2;
            let offsetY = ((parent_height/scale)/2) -  ((this.state.baseProduct.height/2))*scale_constant;
            if(offsetX < 0) {
                offsetX = -1 * offsetX
            }
            if(offsetY < 0) {
                offsetY = -1 * offsetY
            }

            const konvaSizes = {
                scale: { x : scale , y : scale },
                offset: { x: -offsetX, y : -offsetY },
                width: parent_width ,
                height: parent_height
            };
            this.setState((state) => {
                state.productKonva.stage.scale = konvaSizes.scale;
                state.productKonva.stage.offset = konvaSizes.offset;
                state.productKonva.stage.width = konvaSizes.width;
                state.productKonva.stage.height = konvaSizes.height;
                state.productKonva.show = true;
                return state;
            });
        }




    }

    prepareData(props) {
        return Promise.all([
            productApi.showProduct(props ? props.match.params.productId : this.props.match.params.productId),
            productApi.getProductPlugs(props ? props.match.params.productId : this.props.match.params.productId),
        ]).then((data) => {
            this.setState((state) => {
                state.baseProduct = data[0];
                this.props.addSelectProducts(data[0]);
                this.props.addInterfaces(data[1]);
                state.selectedProduct = data[0];
                state.plugs = data[1];
                state.selectedPlug = data[1][0];
                state.productKonva.images.push({
                    id: findSelectedOrFirst(this.state.baseProduct.variants).id,
                    product_id: state.baseProduct.id,
                    src: findSelectedOrFirst(this.state.baseProduct.variants).src,
                    width: this.state.baseProduct.width,
                    height: this.state.baseProduct.height,
                });

                state.sideBarCarts.push({
                    id: state.baseProduct.id,
                    shopify_id: findSelectedOrFirst(state.baseProduct.variants).shopify_id,
                    src: findSelectedOrFirst(state.baseProduct.variants).src,
                    title: findSelectedOrFirst(state.baseProduct.variants).title,
                    product_title: state.baseProduct.title,
                    quantity: 1,
                    price: findSelectedOrFirst(state.baseProduct.variants).price,
                    x:0,
                    y:0,
                    isBaseProduct: true,
                });

                return state;
            });
        });
    }

    addProductImage(product) {

        this.setState((state) => {
            state.selectedProduct = product;
            const variant = findSelectedOrFirst(product.variants);
            const productCoordinates = this.calculateCoordinates();
            const image = {
                id: variant.id,
                product_id: product.id,
                src: variant.src,
                width: product.width,
                height: product.height,
                x: productCoordinates.x,
                y: productCoordinates.y,
                category: this.state.selectedPlug.name
            };
            const imageIndex = state.productKonva.images.findIndex(
                image => image.category === this.state.selectedPlug.name
            );

            if (imageIndex !== -1) {
                state.productKonva.images.splice(imageIndex, 1, image);
            } else {
                state.productKonva.images.push(image);
            }

            const cartIndex = state.sideBarCarts.findIndex(
                (cart) => (cart.product_id === product.id) || (cart.interface_id === product.pivot.interface_id)
            );
            const cart = {
                id: variant.id,
                product_id: product.id,
                shopify_id: variant.shopify_id,
                title: variant.title,
                product_title: product.title,
                src: variant.src,
                quantity: 1,
                price: variant.price,
                interface_id: product.pivot.interface_id,
            };
            if (cartIndex !== -1) {
                state.sideBarCarts.splice(cartIndex, 1, cart);
            } else {
                state.sideBarCarts.push(cart);
            }

            const productPlusIndex = state.productKonva.images.findIndex(i => i.plugName === state.selectedPlug.name);
            if (productPlusIndex !== -1) {
                state.productKonva.images.splice(productPlusIndex, 1);
            }

            return state;
        });
    }

    calculateCoordinates() {
        const selectedPlugProduct = this.state.selectedPlug.products.find(
            product => product.id === this.state.baseProduct.id
        );

        const coordinates = {
            x: this.state.baseProduct.width * ((selectedPlugProduct.pivot.coordinate_x) / 100),
            y: this.state.baseProduct.height * ((selectedPlugProduct.pivot.coordinate_y) / 100),
        };
        coordinates.x += this.state.selectedProduct.width * (this.state.selectedProduct.pivot.coordinate_x / 100);
        coordinates.y += this.state.selectedProduct.height * (this.state.selectedProduct.pivot.coordinate_y / 100);

        return coordinates;
    }

    setSelectedPlug(plug) {
        this.setState((state) => {
            state.selectedPlug = plug;
            state.plugSliderCurrentIndex = state.plugs.findIndex(p => p.id === plug.id);
            return state;
        }, () => {
            this.interfacesSwiper.current.swiper.slideToLoop(this.state.plugSliderCurrentIndex);
        });
    }

    handleProductPlugClick(image) {
        if (image.type === 'plus') {
            const plug = this.state.plugs.find(plug => plug.id === image.id);
            this.setSelectedPlug(plug);
        } else {
            const konvaImage = this.state.productKonva.images.find((i) => i.id === image.id);
            const plug = this.state.plugs.find((plug) => plug.name === konvaImage.category);

            if (plug) {
                this.setSelectedPlug(plug);
            }
        }
    }

    handleMouseEnter(image) {
        if (!this.existsProductPlusPounts) {
            this.setProductPlusPoints();
        }

        if (image.product_id !== this.state.baseProduct.id) {
            document.body.style.cursor = 'pointer';
            this.setState((state) => {
                state.productKonva.images.forEach((productKonvaImage) => {
                    if (productKonvaImage.product_id !== state.baseProduct.id && productKonvaImage.id !== image.id && productKonvaImage.type !== 'plus' && image.type !== 'plus') {
                        productKonvaImage.opacity = 0.5;
                    }
                });

                return state;
            });
        } else if (image.product_id === this.state.baseProduct.id) {
            // this.setProductPlusPoints();
        }
    }

    handleMouseLeave(image) {
        if (image.product_id !== this.state.baseProduct.id) {
            document.body.style.cursor = 'default';
            this.setState((state) => {
                state.productKonva.images.forEach((productKonvaImage) => {
                    if (productKonvaImage.product_id !== state.baseProduct.id && productKonvaImage.id !== image.id && productKonvaImage.type !== 'plus' && image.type !== 'plus') {
                        productKonvaImage.opacity = 1;
                    }
                });

                return state;
            });
        } else if (image.product_id === this.state.baseProduct.id) {
            // this.removeProductPlusPoints();
        }
    }

    handleCartQuantityChange(e, cartId) {
        const value = e.target.value;

        if (value >= 0 && value <= 100) {
            this.setState((state) => {
                state.sideBarCarts.find(cart => cart.id === cartId).quantity = value;
                return state;
            });
        }
    }

    handlePlugItemVariantChange(imageId, product) {
        this.setState((state) => {
            state.selectedPlug.interfaces.forEach((product) => {
                product.variants.forEach((variant) => {
                    return variant.selected = (variant.id === imageId)
                });
            });

            return state;
        }, () => {
            const productImageIndex = this.state.productKonva.images.findIndex(image => image.product_id === product.id);

            if (product && productImageIndex !== -1) {
                this.addProductImage(product);
            }
        });
    }

    checkImageSelection(images, key, image_id) {
        let selected = images.filter(image => (image.selected === true));
        if (selected.length) {
            return (selected[0].id === image_id);
        } else if (!selected.length && key === 0) {
            return true;
        }

        return false;
    }

    getSelectedVariant(variants) {
        let selected = variants.filter(variant => (variant.selected === true));
        if (selected.length) {
            return  selected[0];
        } else return  variants[0];
    }

    checkProductKonva(product) {
        return this.state.productKonva.images.filter(image => (image.product_id === product.id)).length ? true : false;
    }

    handleRangePlugSlider(e) {
        const index = e.target.value;
        this.setState({
            plugSliderCurrentIndex: Number(index),
        }, () => {
            this.plugRef.slickGoTo(this.state.plugSliderCurrentIndex);
        });
    }

    handleRangeProductSlider(e) {
        const index = e.target.value;
        this.setState({
            productSliderCurrentIndex: Number(index),
        }, () => {
            this.productsSwiper.current.swiper.slideTo(this.state.productSliderCurrentIndex)
        });
    }

    removeCardById(cartId) {
        this.setState((state) => {
            const sideBarCartsIndex = state.sideBarCarts.findIndex((cart) => cart.id === cartId);
            state.sideBarCarts.splice(sideBarCartsIndex, 1);

            return state;
        });
    }

    removeKonvaProductImage(product_id, imageId) {

        this.setState((state) => {
            const index = state.productKonva.images.findIndex(
                (image) => image.product_id === product_id
            );
            state.plugs.find((plug) => plug.name === state.productKonva.images[index].category);
            state.productKonva.images.splice(index, 1);

            return state;
        });
    }

    renderPlugs() {
        const {plugs} = this.state;

        return (
            <div className="row product-interfaces">
                <div className="col-lg-8 col-12 offset-lg-2 offset-0">
                    <Swiper
                        spaceBetween={1}
                        slidesPerView={3}
                        centeredSlides={true}
                        centeredSlidesBounds={false}
                        loop={true}
                        roundLengths={true}
                        slideToClickedSlide={true}
                        onSlideChange={(swiper) => this.setSelectedPlug(this.state.plugs[swiper.realIndex])}
                        ref={this.interfacesSwiper}
                        breakpoints={{
                            1199: {
                                slidesPerView: 7,
                                centeredSlides: true,
                            }
                        }}
                    >
                        {plugs.map((plug) =>
                            <SwiperSlide key={plug.id}>
                                <div className='blue-line-top'></div>
                                <div className="text-center p-2" key={plug.id}>
                                    {plug.name}
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                {this.state.selectedPlug &&
                <div className="col-2 my-2 scroll-range-wrapper">
                    <div className="d-flex align-items-center justify-content-center">
                        <span
                            className='text-small'>{this.state.productSliderCurrentIndex + 1}/{this.state.selectedPlug.interfaces.length}</span>
                        <Input
                            inputClassName="scroll-range-input cursor-pointer"
                            onChange={(e) => this.handleRangeProductSlider(e)}
                            value={this.state.productSliderCurrentIndex}
                            type="range"
                            min={0}
                            max={this.state.selectedPlug.interfaces.length - 1}
                        />
                    </div>
                </div>}
            </div>
        );
    }

    renderSelectedPlugItems() {

        if (this.state.selectedPlug) {
            return (
                <div className="row">
                    <div className={`col-12 p-0 mx-auto products-swiper`}>
                        <Swiper
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            slideToClickedSlide={true}
                            autoHeight={true}
                            direction={'horizontal'}
                            mousewheel={{
                                invert: true,
                                releaseOnEdges: true,
                                sensitivity: 10
                            }}
                            speed={200}
                            ref={this.productsSwiper}
                            breakpoints={{
                                568: {
                                    centeredSlides:true,
                                    direction:'horizontal'
                                },
                                768: {
                                    centeredSlides:true,
                                    direction:'vertical'
                                },
                                1199: {
                                    centeredSlides:true,
                                    direction:'horizontal'
                                }
                            }}
                            onSlideChange={ (swiper) => {
                                this.setState({productSliderCurrentIndex:swiper.realIndex})
                            }}
                            navigation={{
                                nextEl: '.products-swiper .swiper-button-next',
                                prevEl: '.products-swiper .swiper-button-prev',
                            }}
                        >
                            <button style={{left: this.state.productsSwiper.prev.left}} className="swiper-button-prev">
                            </button>
                            {this.state.selectedPlug.interfaces.map((product) => (
                                <SwiperSlide key={product.id} className="flex-column h-100 button-change">
                                    <div className="position-relative text-center c-body m-auto">
                                        <div className="position-relative mt-auto text-center">
                                            <div className="d-flex flex-column bg-card">
                                                <span className="title-t">Strike Industries</span>
                                                <span title={ product.title } className="title"> { product.title } </span>
                                                <div className="img-block">
                                                    <img style={{height: "150px"}}
                                                         src={this.getSelectedVariant(product.variants).src}
                                                         alt={product.title}
                                                         className="img"/>
                                                </div>
                                                <span className="title-s">{ product.title }</span>
                                                <span className="price-s">{ numberFormat(findSelectedOrFirst(product.variants).price)}</span>
                                                <div className={`variants flex-column text-left px-3 ${(product.variants.length < 2) ? 'invisible' : ''}`}>
                                                    <span>Color</span>
                                                    <div className={`d-flex flex-wrap ${product.variants.length%5 == 0 ? 'justify-content-between':''}`} >
                                                        {product.variants.map((variant, key) => (
                                                            <button key={variant.id} className={`color-btn
                                                           ${ (this.checkImageSelection(product.variants, key, variant.id)) ? "active-color" : ""}`}
                                                                    style={{
                                                                        background: variant.title
                                                                    }}
                                                                    onClick={ () => this.handlePlugItemVariantChange(variant.id, product)}/>))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100 btn-order position-relative">
                                            {!this.checkProductKonva(product) ?
                                                <button
                                                    className="btn button-product bg-blue-custom"
                                                    onClick={() => this.addProductImage(product)}>
                                                    Equip +{ numberFormat(findSelectedOrFirst(product.variants).price)}
                                                </button>
                                                : <button
                                                    className="btn button-product bg-red-custom"
                                                    onClick={() => (this.removeKonvaProductImage(product.id), this.removeCardById(product))}>
                                                    Remove -{ numberFormat(findSelectedOrFirst(product.variants).price)}
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <button style={{right: this.state.productsSwiper.next.right}} className="swiper-button-next">
                            </button>
                        </Swiper>

                    </div>
                </div>
            );
        }

        return null;
    }

    render() {
        const {productKonva: {stage, images,show}, sideBarCarts} = this.state;

        return (
            <div className="container-fluid product-show-page">
                <div className="row h-100 flex-lg-column-reverse flex-md-row-reverse flex-column-reverse">
                    <div className="col-xl-12 col-md-5 col-12 p-0 plug-and-plug-items-wrapper">
                        <div className='container-fluid'>
                            {this.renderPlugs()}
                            {this.renderSelectedPlugItems()}
                        </div>
                    </div>
                    <div id="stage" className="col-xl-12 col-md-7 col-12 d-flex justify-content-center">
                        {show ?
                            <Stage width={stage.width}
                                   height={stage.height}
                                   scale={stage.scale}
                                   offset={stage.offset}
                                   ref={this.konvaStage}
                                   onMouseLeave={this.removeProductPlusPoints}>
                                <Layer>
                                    {
                                        images.map((image) => (
                                            <LoadImage
                                                key={image.id}
                                                src={image.src}
                                                x={image.x}
                                                y={image.y}
                                                opacity={image.opacity}
                                                clickCallback={() => this.handleProductPlugClick(image)}
                                                onMouseEnterCallback={() => this.handleMouseEnter(image)}
                                                onMouseLeaveCallback={() => this.handleMouseLeave(image)}
                                            />
                                        ))
                                    }
                                </Layer>
                            </Stage>
                            : null}
                    </div>
                </div>
                <RightSidebar
                    carts={sideBarCarts}
                    handleCartQuantityChangeCallback={(e, cartId) => this.handleCartQuantityChange(e, cartId)}
                    removeCardByIdCallback={(cartId) => this.removeCardById(cartId)}
                    removeKonvaProductImageCallback={(product_id) => this.removeKonvaProductImage(product_id)}
                    checkoutCallback={this.shopifyRedirect}
                    ref={this.rightSidebarRef}
                />
            </div>
    );
    }
}

export default connect(
    null,
    {addInterfaces, addSelectProducts, addBaskets, addRef}
)(ShowPage);

