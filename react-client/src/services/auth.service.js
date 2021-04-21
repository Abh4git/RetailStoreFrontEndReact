import axios from "axios";
//Authentication service
const API_URL = "http://127.0.0.1:5000/api/auth";
const headers = { 'Access-Control-Allow-Origin': '*' };
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'React POST Request Example' })
};
class AuthService {
  login(username, password) {
   
    return fetch(API_URL, 
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({'username': username, 'password': password})
      })
         .then(response => {
            if (!response.ok) {
              console.log(response);
            }
              console.log(response);
              return response.json();
            
          })
          .then(json => {
            console.log("Retrieved items:");
            console.log(json.accessToken);
            localStorage.setItem("user", JSON.stringify(json.user));
            console.log('User set in localstorage');
         
            return json.AuthResult;
          })
          .catch(error => {
            //this.handleError(error);
            console.log(error)
          });

          /*
    return axios
      .post(API_URL, {
        username,
        password
      },{withCredentials: true ,crossorigin: true})
      .then(response => {
        if (response.accessToken) {
          //Check for Admin role as this is Admin Application
        //  if (response.data.roles.includes("ROLE_ADMIN"))
          {
           localStorage.setItem("user", JSON.stringify(response.data));
           console.log('User set in localstorage');
          }
        }

        return response.data;
      });
      */
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();