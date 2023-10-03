import React, { useCallback } from "react";
import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, loadPokemons }) => {
  const loadMore = useCallback(() => loadPokemons(), [loadPokemons]);

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        <ActivityIndicator
          size="large"
          style={styles.ActivityIndicator}
          color="#AEAEAE"
        />
      }
      initialNumToRender={10}
      removeClippedSubviews={true}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default React.memo(PokemonList);
