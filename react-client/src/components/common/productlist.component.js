import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import UserDetailsLink from './userdetailslink.component';
import UserService from '../../services/user.service';
import { Card, Container } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

//Tableblock - In use as part of Productscontentarea
class ProductItem extends React.Component {
   constructor(props)
   {
      super(props);
      this.state={current_row:'',deletedUser:''};
   }

   handleClick(rowid)
   {
      console.log('Click to be handled', rowid)
   }
   render(){
      var row = this.props.row;
      console.log(row);
      console.log("Name",row.name);
      const rownumber = parseInt(this.props.rownumber)+1;
    return (
      
      
      <Card>
       <div className="row card-body">
        <div className="col-sm-6">  
        <p className="card-title"><b>{row.name}</b></p>   
        <p className="card-text">{row.description}</p>
        <a href="#" class="btn btn-primary">Details</a>
        </div>
        <img align="right" src={"/assets/"+ row.imagename} width="80" height="100"/>
      </div>
      </Card>
    )
      
   }
 }

 

 class Header extends React.Component {

   render(){
      let header = this.props.header;
      return header.map(headerItem => {
         return <div key={headerItem}>{headerItem.toUpperCase()}</div>
      })
    
   }
 }


class ProductData extends React.Component
{
   constructor(props)
   {
     super(props);
     
   }
   render()
   {
      
      const products=this.props.rows.map(row => <ProductItem key={row.id} row={row} rownumber={1} />);
         return (
            products
           
            
         )
      
   }
}



class ProductList extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {rownumber:0};
    
    
  }
  



 
    render(){
        return (
            <Container>
             <h5 id='title'>{this.props.title} </h5>
                <Header header={this.props.header}/>
                <ProductData rows={this.props.rows}/>
            </Container>

        );
    }


    
}



export default withRouter(ProductList);

