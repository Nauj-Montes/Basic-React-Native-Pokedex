import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useQuery } from "react-query";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Pokemon/Header";
import Types from "../components/Pokemon/Types";
import Stats from "../components/Pokemon/Stats";
import { getPokemonInfoApi } from "../api/pokemonAPI";

const usePokemonInfo = (id) => {
  const { data } = useQuery(["pokemon", id], async () => getPokemonInfoApi(id));
  return data;
};

export default function PokemonInfo(props) {
  const {
    route: { params },
    navigation,
  } = props;

  const pokemon = usePokemonInfo(params.id);

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

  if (!pokemon) return null;

  const pokemonNumber = pokemon.id
    ? pokemon.id.toString().padStart(3, "0")
    : "";

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        number={pokemonNumber}
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
