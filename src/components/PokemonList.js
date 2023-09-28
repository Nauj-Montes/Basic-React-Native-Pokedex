import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons } = props;
  // Logs pokemons names

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
