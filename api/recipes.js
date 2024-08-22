import { API_URL, API_KEY } from "../constants/constants";

export async function searchRecipesApi(q) {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=10&query=${q}`;
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
export async function similarRecipesApi(id) {
  try {
    const url = `${API_URL}/recipes/${id}/similar?apiKey=${API_KEY}&number=10`;
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

export async function dessertRecipesApi(nu) {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=${nu}&type=dessert`;
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

export async function cuisineRecipesApi(cu, nu) {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=${nu}&cuisine=${cu}`;
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

export async function dietRecipesApi(di, nu) {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=${nu}&diet=${di}`;
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

export async function intolerancesRecipesApi(int, nu) {
  try {
    const url = `${API_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=${nu}&intolerances=${int}`;
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
