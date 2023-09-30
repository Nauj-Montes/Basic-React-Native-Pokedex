import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
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
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonResponse = await getPokemonApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonResponse.id,
          number: `#${pokemonResponse.id.toString().padStart(3, "0")}`,
          next: null,
          name: pokemonResponse.name,
          picture: pokemonResponse.sprites.other.home.front_default,
          svg: pokemonResponse.sprites.other.dream_world.front_default,
          types: pokemonResponse.types,
          height: pokemonResponse.height,
          weight: pokemonResponse.weight,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} />;
}
