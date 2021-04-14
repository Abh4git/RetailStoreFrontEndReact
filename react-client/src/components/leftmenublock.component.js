import React from 'react';
import { Link} from 'react-router-dom';
class LeftMenuBlock extends React.Component{

    constructor(props)
    {
      super(props);
      this.state = {
        themes : [{title:'Test',description:'Desc'}]
      }
      
    }
    componentDidMount() 
    {
     
    }
  
  
    
  
   
      render(){
          return (
            <div id="start"  class=" col-3  bg-light mb-1 mh-100" >
            <ul class="nav navbar-nav pl-0">
             <br></br>
             <li class="nav-item pl-0">
             <Link class="btn text-light text-right bg-secondary btn-lg w-100" to="collaboration">
               Collaboration 
             </Link> 
             </li>
             <br></br>
             <li class="nav-item pl-0">
             <Link class="btn text-light text-right bg-secondary btn-lg w-100" Link="dashboard">
               Communication
             </Link> 
             </li>
             <br></br>
             <li class="nav-item pl-0">
             <Link class="btn text-light text-right bg-secondary btn-lg w-100" Link="dashboard">
               Creativity
             </Link> 
             </li>
             <br></br>
             <li class="nav-item pl-0">
             <Link class="btn text-light text-right bg-secondary btn-lg w-100" Link="dashboard">
               Managing Information
             </Link> 
             </li>
             <br></br>
             <li class="nav-item pl-0">
             <Link class="btn text-light text-right bg-secondary btn-lg w-100" Link="dashboard">
               Managing Self
             </Link> 
             </li>
            </ul>
            </div>
 
  
          );
      }
  
  
      
  }
  
   
  export default LeftMenuBlock;
  