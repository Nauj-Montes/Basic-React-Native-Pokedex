import React, { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import PokemonList from "../components/PokemonList";
import { getPokemonsApi, getPokemonApi } from "../api/pokemonAPI";

export default function Pokedex() {
  const queryClient = useQueryClient();
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);

      // Update the next URL for pagination
      setNextUrl(response.next);

      const pokemonResponses = await Promise.all(
        response.results.map(async (pokemon) => {
          return await queryClient.fetchQuery(
            ["pokemon", pokemon.url],
            async () => getPokemonApi(pokemon.url)
          );
        })
      );

      // Combine new data with existing data
      setPokemons((prevPokemons) => [
        ...prevPokemons,
        ...pokemonResponses.map((pokemonResponse) => {
          return {
            id: pokemonResponse.id,
            number: `#${pokemonResponse.id.toString().padStart(3, "0")}`,
            next: response.next, // Update to the next URL
            name: pokemonResponse.name,
            picture: pokemonResponse.sprites.other.home.front_default,
            types: pokemonResponse.types,
            height: pokemonResponse.height,
            weight: pokemonResponse.weight,
            order: pokemonResponse.count,
          };
        }),
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />;
}
