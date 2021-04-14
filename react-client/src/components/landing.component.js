import React from 'react';
import { Link} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Notification from "./notifications.component";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignUpDialog from './sample.component';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { LinkContainer } from 'react-router-bootstrap';


function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  

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
  
  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }
  
  class Landing extends React.Component {
    constructor(props) {
      super(props);

      this.state = {login: ''};
    }
  
    render() {
      return (
        <div className="container">
            <TopMenu Menu1_Display="Home" Menu1_HREF="/home" Menu2_Display="Library" Menu2_HREF="/home" Menu3_Display="Badges" Menu3_HREF="/home" Menu4_Display="Settings" Menu4_HREF="/home"></TopMenu>
            <br></br>
            <Notification title="Welcome!" message="Welcome to our 21st Century Skills Hub. To start, please login by clicking the login button."/>
        </div>

      );
    }
  

  }
  
  export default Landing;

  