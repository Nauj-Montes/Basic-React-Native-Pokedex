import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonScreen from "./src/screens/Pokemon";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pokemon"
          component={PokemonScreen}
          options={{
            title: "",
            headerShown: true,
            headerTransparent: true,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
