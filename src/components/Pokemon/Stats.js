import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { getColorByType } from "../../utils/getColorByType";
import { capitalize } from "lodash";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import { styles } from "../../styles/PokemonStatsStyle.js";

export default function Stats(props) {
  const { stats, types } = props;
  const animatedViewRef = useRef(null);
  const maxStatValue = 255;

  const animatedStats = stats.map(() => new Animated.Value(0));

  useEffect(() => {
    if (animatedViewRef.current) {
      animatedViewRef.current.slideInUp(800);
    }

    // Animate the stat values within the progress bars
    const animations = stats.map((stat, index) =>
      Animated.timing(animatedStats[index], {
        toValue: stat.base_stat,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );

    Animated.stagger(200, animations).start();
  }, []);

  return (
    <Animatable.View
      ref={animatedViewRef}
      style={styles.container}
      animation="fadeIn"
      duration={800}
    >
      <Card style={styles.cardContainer}>
        <Card.Title
          title="Base Stats"
          titleStyle={styles.cardTitle}
          left={(props) => (
            <Icon
              name="star"
              size={24}
              color={getColorByType(types[0])}
              style={styles.icon}
            />
          )}
        />
        <Card.Content>
          {stats.map((stat, index) => (
            <Animatable.View key={index} style={styles.statContainer}>
              <Text style={styles.statName}>{capitalize(stat.name)}</Text>
              <View style={styles.progressBarContainer}>
                <Animated.View
                  style={[
                    styles.progressBar,
                    {
                      width: animatedStats[index].interpolate({
                        inputRange: [0, maxStatValue],
                        outputRange: ["0%", "100%"],
                      }),
                      backgroundColor: getColorByType(types[0]),
                    },
                  ]}
                />
              </View>
              <Text style={styles.baseStat}>
                {`Base Stat: ${
                  animatedStats[index]._value === 0
                    ? Math.round(stat.base_stat)
                    : Math.round(animatedStats[index]._value)
                }`}
              </Text>
            </Animatable.View>
          ))}
        </Card.Content>
      </Card>
    </Animatable.View>
  );
}
