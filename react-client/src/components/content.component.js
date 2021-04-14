import React from 'react';
import { Link,Redirect,Route,withRouter} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from "./notifications.component";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignUpDialog from './sample.component';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { LinkContainer } from 'react-router-bootstrap';

import BaseNavigation from '../components/basenav.component';

import ContentArea from './contentarea.component';
import RankContentArea from '../components/layout/rankcontentarea.component';
import UploadContentArea from '../components/layout/uploadcontentarea.component';
import InputTextContentArea from '../components/layout/inputtextimgcontentarea.component';
import SelfAssessContentArea from '../components/layout/selfassesscontentarea.component';

import UserInfoForm from '../components/layout/userinfoformcontentarea.component';
import UserList from './layout/productslistcontentarea.component';
//import ModalArea from '../components/layout/modalarea.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faCog } from '@fortawesome/free-solid-svg-icons';

import { data } from 'jquery';

import axios from "axios";
//import ListBlock from './listblock.component';

function TopMenu(props) {
      return (
        <Tabs defaultActiveKey="menu1"  id="uncontrolled-tab">
        <Tab eventKey="menu1" title={props.Menu1_Display}>

        </Tab>
        <Tab eventKey="menu2" title={props.Menu2_Display}>
            <SignUpDialog></SignUpDialog>
        </Tab>
        <Tab eventKey="menu3" title={props.Menu3_Display}>
            <SignUpDialog></SignUpDialog>
        </Tab>
        <Tab eventKey="menu4" title={props.Menu4_Display}>
            <SignUpDialog></SignUpDialog>
        </Tab>
</Tabs>
    
      )
  }
  
  
  
  //ContentArea 
  /*function ContentArea(props) {
    return (
      <Container>
          {props.current_task.title}
          
          <ContentListItems task={props.current_task} />
          
      </Container>
    );
  }*/

  class Content extends React.Component {
    constructor(props) {
      super(props);

      this.state = {content: 1, loaded:false, skill:1,task:1 };
      
      this.getContentByState= this.getContentByState.bind(this);
      this.onDashboardClicked= this.onDashboardClicked.bind(this);
      this.getLogOutLink = this.getLogOutLink.bind(this);
      //this.onLogoutClicked=this.onLogoutClicked.bind(this);
      //this.handleCollabClick = this.handleCollabClick.bind(this);
     // this.handleCreativityClick = this.handleCreativityClick.bind(this);
      //this.handleNextClick = this.handleNextClick.bind(this);
     // this.handleLoad = this.handleLoad(this);
     
      
    }
  
    componentDidMount() {
      
      //this.loadContentInfo();
      
    }

    handleLoad()
    {
      console.log('load called');
      if (this.state.loaded)
      {
        window.location.href="/tag";
      }
    }
   
    
    getContentByState()
    {
      
        switch ( this.state.content)
        {
          case 1:
            return <UserInfoForm></UserInfoForm>;
            break;
          case 2:
            return <UserList/>;
            break;
          case 3:
            return <UploadContentArea/>;
            break;
          case 4:
            return <InputTextContentArea/>;
            break;
          case 5:
              return <SelfAssessContentArea title={'Self Assessment'} message={'Please select.'}/>;
              break;
  
              
      }

    }

    
    getLogOutLink() {
      const isLoggedIn = sessionStorage.getItem('IsLoggedIn');
      console.log('IsLoggedIn', isLoggedIn);
      if (isLoggedIn) {
        return <Link to='/logout' >Logout</Link>;
      }
    }

    handleCollabClick() {
      
      this.setState({task:2});
      //window.location.reload(false);
      console.log('The link was clicked.');
    }

    handleCreativityClick() {
      this.setState({task:2});
      //window.location.reload(false);
      console.log('The link was clicked.');
    }
    handleNextClick() {
      var currentTaskNumber = parseInt(this.state.task);
      if (currentTaskNumber<5)
      {
      currentTaskNumber ++;

      this.setState({task:currentTaskNumber});
      }
      //window.location.reload(false);
      console.log('The link was clicked.');
    }

    onDashboardClicked(event)
    {
      this.setState({content:2});
    }
    render() {

    
      return (
        <React.Fragment>
          { /*Top Navigation Placeholder*/ }
          <nav className="navbar  navbar-light  bg-primary" >
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <this.getLogOutLink/>
          </nav>
          { /*Content Areas Start here. It is broken into 3 parts. 
          noGutters and Container fluid make it padding free*/ }
        <Container fluid={true} className="p-0">
        <Row noGutters >
            <Col xs={3}><br/>
            <Link to="/dashboard" onClick={this.onDashboardClicked}>
            <FontAwesomeIcon icon={faTachometerAlt} />
              Dashboard
              </Link> 
            <br/><br></br>
            <Link to="/tag"><FontAwesomeIcon icon={faCog} />Settings</Link>          
            <br></br>
             </Col>
             <Col xs={7}>Content Area 2
            <this.getContentByState/>
            </Col>
            <Col xs={3} lg="2">
             Content Area 3
             </Col>
        </Row>
            
        </Container>
        </React.Fragment>
      );
    }
  

  }
  
  export default withRouter( Content);


  
  