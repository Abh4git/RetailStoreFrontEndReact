import axios from "axios";
//User Service calls
const API_URL = "http://localhost:8080/api/user/";

class UserService {
    async addUser(user,token) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' , 'Authorization': "Bearer " + token},
            body: JSON.stringify(user)
        };
         return fetch(API_URL,  requestOptions)
         .then(response => {
            if (!response.ok) {
              this.handleResponseError(response);
            }
            return response.json();
          })
          .then(json => {
            console.log("Retrieved items:");
            console.log(json.username);
            return json.username;
          })
          .catch(error => {
            this.handleError(error);
          });
      }
      handleError(error) {
                 console.log(error.message); 
      }
  
      // Get All Users service call
      async getAllUsers() {
        return fetch(API_URL)
         .then(response => {
            if (!response.ok) {
              this.handleResponseError(response);
            }
            return response.json();
          })
          .then(json => {
            console.log("Retrieved items:");
            console.log(json.users);
            return json.users;
          })
          .catch(error => {
            this.handleError(error);
          });
      }
      handleError(error) {
                 console.log(error.message); 
      }

      //UpdateUser
      async updateUser(user) {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(user)
      };
        return fetch(API_URL,requestOptions)
         .then(response => {
            if (!response.ok) {
              this.handleResponseError(response);
            }
            return response.json();
          })
          .then(json => {
            console.log("Updated User detail:");
            console.log(json.user);
            return json.user;
          })
          .catch(error => {
            this.handleError(error);
          });
      }

      //Delete User
      async deleteUser(userid) {
        const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({"userid": userid})
      };
        return fetch(API_URL+userid,requestOptions)
         .then(response => {
            if (!response.ok) {
              this.handleResponseError(response);
            }
            return response.json();
          })
          .then(json => {
            console.log("Deleted User detail:");
            console.log(json);
            return json;
          })
          .catch(error => {
            this.handleError(error);
          });
      }

}

export default new UserService();