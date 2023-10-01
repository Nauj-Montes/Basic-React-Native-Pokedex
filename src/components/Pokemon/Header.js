import { Text, SafeAreaView, StyleSheet, Image, View } from "react-native";
import { capitalize, get } from "lodash";
import { getColorByType } from "../../utils/getColorByType";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Header(props) {
  const { name, number, image, types } = props;
  const typesColors = () => {
    if (types.length === 1) {
      return [getColorByType(types[0]), "white"];
    } else {
      return [getColorByType(types[0]), getColorByType(types[1])];
    }
  };

  const bgStyle = [
    {
      ...style.bg,
    },
  ];

  return (
    <>
      <LinearGradient colors={typesColors()} style={bgStyle} />
      <SafeAreaView>
        <View style={style.header}>
          <Text style={style.PokemonNumber}>
            {
              //add # to number
              "#" + number
            }
          </Text>
          <Text style={style.PokemonName}>{capitalize(name)}</Text>
        </View>
        <View style={style.ImageContainer}>
          <Image source={{ uri: image }} style={style.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  bg: {
    height: 400,
    width: "100%",
    position: "absolute",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    transform: [{ scaleX: 1.4 }],
  },
  header: {
    flexDirection: "row",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  PokemonName: {
    fontWeight: "bold",
    fontSize: 50,
    color: "white",
    position: "absolute",
    top: 100,
    // Add shadow to text
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  PokemonNumber: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
    position: "absolute",
    top: 46,
    right: 20,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  ImageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 270,
    height: 270,
    resizeMode: "contain",
    top: -40,
  },
});

//TODO: Separate the styles from the component
