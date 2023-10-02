import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import { Image as ExpoImage } from "react-native-expo-image-cache";
import { POKEMON_TYPES_COLORS } from "../utils/constants";
import { styles } from "../styles/PokemonCardStyles";

const { width: screenWidth } = Dimensions.get("window");

const CardHeader = ({ number, name }) => (
  <View style={styles.cardHeader}>
    <Text style={styles.cardNumber}>{number}</Text>
    <Text style={styles.cardName}>{name}</Text>
  </View>
);

const CardType = ({ type }) => (
  <View
    style={[
      styles.cardBodyType,
      { backgroundColor: POKEMON_TYPES_COLORS[type.type.name] },
    ]}
  >
    <Text style={styles.cardBodyTypeText}>{type.type.name}</Text>
  </View>
);

const CardBody = ({ types, picture }) => {
  const isTwoTypes = types.length === 2;

  return (
    <View style={styles.cardBody}>
      {types.map((type, index) => (
        <View
          key={index}
          style={[
            styles.cardBodyType,
            { backgroundColor: POKEMON_TYPES_COLORS[type.type.name] },
            isTwoTypes && index === 1 && { top: 24 },
          ]}
        >
          <Text style={styles.cardBodyTypeText}>{type.type.name}</Text>
        </View>
      ))}
      <ExpoImage
        style={styles.cardBodyImage}
        preview={{ uri: picture }}
        uri={picture}
        tint={"transparent"}
      />
    </View>
  );
};

const PokemonCard = React.memo(({ pokemon }) => {
  const navigation = useNavigation();

  const navigateToPokemon = useCallback(() => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  }, [navigation, pokemon.id]);

  return (
    <TouchableOpacity onPress={navigateToPokemon} activeOpacity={1}>
      <View style={[styles.card, { width: screenWidth * 0.45 }]}>
        <CardHeader number={pokemon.number} name={pokemon.name} />
        <CardBody types={pokemon.types} picture={pokemon.picture} />
      </View>
    </TouchableOpacity>
  );
});

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }),
      })
    ).isRequired,
    picture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PokemonCard;
