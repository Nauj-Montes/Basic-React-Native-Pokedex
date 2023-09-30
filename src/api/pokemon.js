import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endPointUrl) {
  try {
    const url = `${API_HOST}pokemon?limit=20&offset=0`;
    const response = await fetch(endPointUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPokemonApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getPokemonInfoApi(id) {
  try {
    const url = `${API_HOST}pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
