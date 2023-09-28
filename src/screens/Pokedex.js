import { SafeAreaView, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonsApi, getPokemonApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonResponse = await getPokemonApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonResponse.id,
          number: `#${pokemonResponse.id.toString().padStart(3, "0")}`,
          name: pokemonResponse.name,
          picture: pokemonResponse.sprites.other.dream_world.front_default,
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

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
}
