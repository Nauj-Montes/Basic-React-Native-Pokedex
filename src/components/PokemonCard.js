import React, { useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import { useNavigation } from "@react-navigation/native";
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
            isTwoTypes && index === 1 && { top: 24 }, // Apply top style for the second type in two types scenario
          ]}
        >
          <Text style={styles.cardBodyTypeText}>{type.type.name}</Text>
        </View>
      ))}
      <Image style={styles.cardBodyImage} source={{ uri: picture }} />
    </View>
  );
};

const PokemonCard = ({ pokemon }) => {
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
};

// Define prop types for better type checking
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
