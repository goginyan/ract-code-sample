import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./layout/Header";
import CategorySwitch from "./containers/Category";
import CategoryProduct from "./containers/Category/Product";
import './sass/App.scss';


class App extends Component {
  render() {
    return (
            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Switch>
                        <Route exact path="(/|/category)" render={(props) => <CategorySwitch {...props}/>}/>
                        <Route exact path="/category/:id" render={(props) => <CategorySwitch {...props}/>}/>
                        <Route exact path="/category/:categoryId/product/:productId"
                               render={(props) => <CategoryProduct pageType="show" {...props}/>}/>
                    </Switch>
                </Fragment>
            </BrowserRouter>
    );
  }
}

export default App;
