import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonInfoApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Types from "../components/Pokemon/Types";

export default function PokemonInfo(props) {
  const {
    route: { params },
    navigation,
  } = props;

  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    try {
      (async () => {
        const response = await getPokemonInfoApi(params.id);
        setPokemon(response);
      })();
    } catch (error) {
      console.log(error);
      navigation.goBack();
    }
  }, [params]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        number={pokemon.id.toString().padStart(3, "0")}
        image={pokemon.sprites.other.home.front_default}
        types={pokemon.types.map((type) => type.type.name)}
      />
      <Types types={pokemon.types.map((type) => type.type.name)} />
    </ScrollView>
  );
}
