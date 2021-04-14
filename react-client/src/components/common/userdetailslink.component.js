import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ContentService from '../../services/content.services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


  class UserDetailsLink extends React.Component {
    constructor(props) {
      super(props);
      this.updateRowIdentifier=this.updateRowIdentifier.bind(this);
      this.state={RowId:""};
    }
    
    updateRowIdentifier(e) {
        const { onRowClicked } = this.props;
        e.preventDefault();
       // let location = useLocation();
        onRowClicked(this.props.RowId);
        console.log(this.props.RowId);
      }
    
    render() {
      return (
        <Link to={{pathname:'/dashboard',
                    aboutProps:{rowid:this.props.RowId}
                   }} 
                   onClick={this.updateRowIdentifier}><FontAwesomeIcon icon={faTrash} /></Link> 
      );
    }
  
}
  
export default UserDetailsLink;

  
