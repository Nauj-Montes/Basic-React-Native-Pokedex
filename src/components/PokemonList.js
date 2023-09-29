import React, { PureComponent } from "react";
import { StyleSheet, ActivityIndicator, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";

class PurePokemonList extends PureComponent {
  render() {
    const { pokemons, loadPokemons } = this.props;
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
}

export default PurePokemonList;

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
