import React, { PureComponent } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import { POKEMON_TYPES_COLORS } from "../utils/constants";
import { styles } from "./PokemonCardStyles";

class PurePokemonCard extends PureComponent {
  // Remove the shouldComponentUpdate method

  render() {
    const { pokemon, onPress } = this.props;
    const types = pokemon.types.map((type) => type.type.name);

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
  }
}

export default PurePokemonCard;
