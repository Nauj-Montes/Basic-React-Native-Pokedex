import React from "react";
import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons }) => {
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
          style={{ marginTop: 20, marginBottom: 60 }}
          color="#AEAEAE"
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default PokemonList;
