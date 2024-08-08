import { API_URL, API_KEY } from "../constants/constants";

export async function recipeInfoApi(id) {
  try {
    const url = `${API_URL}/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}&addWinePairing=false&addTasteData=false`;
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

export async function dessertRecipesApi() {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=10&type=dessert`;
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

export async function cuisineRecipesApi(cu) {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=3&cuisine=${cu}`;
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

export async function dietRecipesApi(di) {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=20&diet=${di}`;
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

export async function intolerancesRecipesApi(int) {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=20&intolerances=${int}`;
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
