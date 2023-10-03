import React, { useEffect } from "react";
import { API_HOST } from "../utils/constants";

export default function DataPrefetcher() {
  useEffect(() => {
    async function prefetchPokemons() {
      const response = await fetch(`${API_HOST}pokemon?limit=20&offset=0`);
      const data = await response.json();

      // Store the list of pokemons
    }

    prefetchPokemons();
  }, []);

  return null;
}
