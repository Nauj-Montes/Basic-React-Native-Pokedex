import { View, Text, StyleSheet } from "react-native";
import { getColorByType } from "../../utils/getColorByType";
import React from "react";

export default function Types(props) {
  const { types } = props;
  const typesColors = types.map((type) => getColorByType(type));

  return (
    <View style={styles.container}>
      {typesColors.map((color, index) => (
        <View
          key={index}
          style={[
            styles.cardBodyType,
            { backgroundColor: color },
            index === 1 && { marginHorizontal: 10 },
          ]}
        >
          <Text style={styles.cardBodyTypeText}>{types[index]}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    top: -25,
  },
  cardBodyType: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardBodyTypeText: {
    fontSize: 10,
    color: "#fff",
    textTransform: "uppercase",
  },
});
