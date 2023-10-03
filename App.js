import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonScreen from "./src/screens/Pokemon";
import DataPrefetcher from "./src/api/DataPrefetcher";

const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <DataPrefetcher />
    </QueryClientProvider>
  );
}
