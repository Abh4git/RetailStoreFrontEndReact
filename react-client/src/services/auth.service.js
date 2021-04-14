import axios from "axios";
//Authentication service
const API_URL = "http://localhost:5000/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          //Check for Admin role as this is Admin Application
        //  if (response.data.roles.includes("ROLE_ADMIN"))
          {
           localStorage.setItem("user", JSON.stringify(response.data));
           console.log('User set in localstorage');
          }
        }

        return response.data;
      });
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