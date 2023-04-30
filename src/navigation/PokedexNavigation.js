import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { Pokedex, Pokemon } from "../screens";

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          title: "",
          headerTransparent: true,
          headerHideShadow: true,
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{
          title: "",
          headerTransparent: true,
          headerTranslucent: true,
          headerHideShadow: true,
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}
