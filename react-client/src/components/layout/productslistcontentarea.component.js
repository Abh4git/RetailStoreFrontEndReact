import React from 'react';

import { Link} from 'react-router-dom';

import TableBlock from '../common/tableblock.component';
import ProductList from '../common/productlist.component';

import ProductService from '../../services/product.services';
import {withRouter} from 'react-router-dom';

const API_URL = "http://localhost:8080";

//ProductsList 

class ProductsList extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {current_products:[]};
    this.loadProducts=this.loadProducts.bind(this);
  }

  componentDidMount() 
  {
    this.loadProducts();

  }

 
  
  loadProducts(){

    ProductService.getProductsList().then(products => {
        this.setState({current_products: products});
        console.log('Current Products:',this.state.current_products );
        });

  

  }

  

    render(){
        return (
          <div className="container">
          <nav className="navbar  navbar-light  bg-info" >
        <span className="navbar-brand mb-0 h1">Welcome to RetailStore </span>
        </nav>
          <div id="content" className=" w-100 bg-white nopadding mh-100">
            <ProductList rows={this.state.current_products} title={'Products'} header={["Products are listed below"]}/>
           </div>
             </div>

        );
    }

    
}

export default withRouter( ProductsList);

