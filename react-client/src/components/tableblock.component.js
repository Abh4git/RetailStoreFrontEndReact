import React from 'react';

import { Link} from 'react-router-dom';

class TableRow extends React.Component {
   render(){
      const row = this.props.row;
    return (
       <React.Fragment>
      <tr data-toggle="collapse" data-target={"#collapseOne"+ row._id}  className="accordion-toggle collapsed">
      <td className="expand-button"></td>
      <td>{row.title}</td>
      <td>{row.description}</td>
      <td><img src={"/assets/"+ row.imagename} /></td>
       </tr>

      </React.Fragment>
    );
   }
 }

 class TableSubRow extends React.Component {
   render(){
      const competencies = this.props.competencies;
      const row_id =this.props.row_id;
    return (
      <div  id={"collapseOne" + row_id} className="accordian-body collapse">
      <table className="table table-sm table-light"  id={'competencies' + row_id}>
      <tbody>
      <tr id="key">
      <td colSpan='3'>
      {competencies.map((competency, index) => (
        <p key={index}>{competency}</p>
      ))}
      </td>
      </tr>
      </tbody>
      </table>
      </div>
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
      const tableRows=this.props.skills.map(row => <TableRow key={row._id} row={row}/>);
         return (
            tableRows
           
            
         )
      
   }
}



class TableBlock extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      skills : [{title:'Test',description:'Desc'}]
    }
    
  }
  componentDidMount() 
  {
   
  }


  renderTableHeader() {
    let header = Object.keys(this.state.skills[0])
    return header.map((key, index) => {
       return <th scope="col" key={index}>{key.toUpperCase()}</th>
    })
 }

 
    render(){
        return (
            <div>
             <h1 id='title'>{this.props.title} </h1>
            <table className="table table-sm table-dark accordion-toggle"  id='themes'>
               <thead><tr><TableHeader header={["#","TITLE","DESCRIPTION","ITEMS"]}/></tr></thead>
               <tbody>              
                  <TableData skills={this.props.skills}/>
               </tbody>
            </table>
             </div>

        );
    }


    
}



export default TableBlock;

