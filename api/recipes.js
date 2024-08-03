import { API_URL, API_KEY } from "../constants/constants";


export async function popularRecipesApi() {
    try {
      const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=10&veryPopular=true`;
      const params = {
        headers: {
            Accept: "*/*",
        },
      };
       const response = await fetch(url, params);
        const result = await response.json();
         return result;
    } catch (error) {
      console.log(error);
    } 
  }

export async function randomRecipesApi() {
    try {
      const url = `${API_URL}/recipes/random?apiKey=${API_KEY}&number=10`;
      const params = {
        headers: {
            Accept: "*/*",
        },
      };
       const response = await fetch(url, params);
        const result = await response.json();
         return result;
     
    } catch (error) {
      console.log(error);
    } 
  }

  