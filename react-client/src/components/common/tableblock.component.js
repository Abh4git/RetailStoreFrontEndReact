import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import UserDetailsLink from './userdetailslink.component';
import UserService from '../../services/user.service';

//Tableblock - In use as part of Productscontentarea
class TableRow extends React.Component {
   constructor(props)
   {
      super(props);
      this.state={current_row:'',deletedUser:''};
   }

   handleClick(rowid)
   {
      //this.setState({current_row:rowid})
      console.log('Click to be handled', rowid)
      //UserService.deleteUser(rowid).then(deleteduser => {
        // this.setState({deletedUser: deleteduser});
        // console.log('User deleted',deleteduser);
         //});
   }
   render(){
      var row = this.props.row;
      console.log(row);
      //const newRow = JSON.parse(row);
      //console.log(newRow)
      //console.log("RowId",newRow.name);
      console.log("Name",row.name);
      const rownumber = parseInt(this.props.rownumber)+1;
      //this.state.rownumber ++;
    return (
       <React.Fragment>
      <tr >
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.description}</td>
      <td><img src={"/assets/"+ row.imagename} width="80" height="100"/></td> 
      {/*<td> <Link to={"/edituser/"+ row.id}><FontAwesomeIcon icon={faEdit} /></Link> </td>*/}
      
       </tr>

      </React.Fragment>
    );
   }
 }

 

 class TableHeader extends React.Component {

   render(){
      let header = this.props.header;
      return header.map(headerItem => {
         return <th scope="col" key={headerItem}>{headerItem.toUpperCase()}</th>
      })
    
   }
 }


class TableData extends React.Component
{
   constructor(props)
   {
     super(props);
     
   }
   render()
   {
      
      const tableRows=this.props.rows.map(row => <TableRow key={row.id} row={row} rownumber={1} />);
         return (
            tableRows
           
            
         )
      
   }
}



class TableBlock extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {rownumber:0};
    
    
  }
  



 
    render(){
        return (
            <div>
             <h5 id='title'>{this.props.title} </h5>
            <table className="table table-sm table-light "  id='themes'>
               <thead className="thead-light"><tr><TableHeader header={this.props.header}/></tr></thead>
               <tbody>              
                  <TableData rows={this.props.rows}/>
               </tbody>
            </table>
             </div>

        );
    }


    
}



export default TableBlock;

