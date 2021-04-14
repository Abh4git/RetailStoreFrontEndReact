import React from 'react';

import Container from 'react-bootstrap/Container';
import ContentService from '../services/content.services';




  class ContentArea extends React.Component {
    constructor(props) {
      super(props);
      this.state = {content:'', loaded:false};
      this.getContentData = this.getContentData.bind(this);
    }
  
    componentDidMount() {
        console.log('DidMount');
        this.getContentData() ;
        console.log('DidMount Completed');
        
    }
  
    getContentData() {
      ContentService.getTaskContentById('1').then(taskData => {
            this.setState({content: taskData});
            console.log('Content:',this.state.content );
            });
      /*var taskData = ContentService.getTaskContentById('1');
      console.log('tassData:',taskData);
      this.setState({content: taskData.task});
      console.log('this.state.content',this.state.content);
      console.log('getContentData called');*/
    }

    render() {
      var taskData = this.state.content;
      return (
        <Container>
        {taskData.title}
        
        <ContentListItems bodyInfo={taskData.body} />
        
        </Container>
      );
    }
  
}
  
export default ContentArea;

  


  const List= (props) => {
    return <li>{props.tasks}</li>
  };

  class ContentListItems extends React.Component{
 
      
    render(){

          let items;
          if (this.props.bodyInfo)
          {
            items=this.props.bodyInfo.map(item => <List tasks={item} />);
          } else {
            items = "Loading...";
        }
           return (
              items
           
          );
      }
  
       
  }