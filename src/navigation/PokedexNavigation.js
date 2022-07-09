import React from "react";
import { ScrollView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/pokemon";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
  );
}
