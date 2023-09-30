import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { POKEMON_TYPES_COLORS } from "../utils/constants";
import { styles } from "../styles/PokemonCardStyles";
import { useNavigation } from "@react-navigation/native";

const PurePokemonCard = ({ pokemon }) => {
  const types = pokemon.types.map((type) => type.type.name);

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardNumber}>{pokemon.number}</Text>
          <Text style={styles.cardName}>{pokemon.name}</Text>
        </View>
        <View style={styles.cardBody}>
          {types.map((type, index) => (
            <View
              key={index}
              style={[
                styles.cardBodyType,
                { backgroundColor: POKEMON_TYPES_COLORS[type] },
                index === 1 && { top: 20 },
              ]}
            >
              <Text style={styles.cardBodyTypeText}>{type}</Text>
            </View>
          ))}
          <Image
            style={styles.cardBodyImage}
            source={{ uri: pokemon.picture }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PurePokemonCard;
