import axios from "axios";
//Products Service calls
const API_URL = "http://localhost:5000/api/product";

class ProductService {
    async getProductsList() {
        return fetch(API_URL)
         .then(response => {
            if (!response.ok) {
              this.handleResponseError(response);
            }
            return response.json();
          })
          .then(json => {
            console.log("Retrieved items:");
            console.log(json.products);
            return json.products;
          })
          .catch(error => {
            this.handleError(error);
          });
      }
      handleError(error) {
                 console.log(error.message); 
      }
  
}

export default new ProductService();