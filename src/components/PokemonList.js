import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons } = props;
  const loadMore = () => loadPokemons();

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          style={styles.ActivityIndicator}
          color={"#AEAEAE"}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  ActivityIndicator: {
    marginTop: 20,
    marginBottom: 60,
  },
});
