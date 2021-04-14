import axios from "axios";
//Content Service

const API_URL = "http://localhost:5000/api/content/";

class ContentService {
    async getTaskContentById(taskid) {
        return fetch(API_URL+taskid)
         .then(response => {
            if (!response.ok) {
              this.handleResponseError(response);
            }
            return response.json();
          })
          .then(json => {
            console.log("Retrieved items:");
            console.log(json.task);
            return json.task;
          })
          .catch(error => {
            this.handleError(error);
          });
      }
      handleError(error) {
                 console.log(error.message); 
      }
  
}

export default new ContentService();