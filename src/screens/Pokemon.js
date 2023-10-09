import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonInfoApi } from "../api/pokemon";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Pokemon/Header";
import Types from "../components/Pokemon/Types";
import Stats from "../components/Pokemon/Stats";

export default function PokemonInfo(props) {
  const {
    route: { params },
    navigation,
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Icon
          name="arrow-left"
          size={20}
          color="#fff"
          style={{ marginLeft: 20, marginTop: 1 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

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
      <Stats
        stats={pokemon.stats.map((stat) => ({
          base_stat: stat.base_stat,
          name: stat.stat.name,
        }))}
        types={pokemon.types.map((type) => type.type.name)}
      />
    </ScrollView>
  );
}
