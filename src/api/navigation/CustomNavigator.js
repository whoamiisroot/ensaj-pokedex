import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import PokedexNavigation from "./PokedexNavigation";

const Tab = createBottomTabNavigator();

export const CustomNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: (focused) => renderPokeball(focused),
        }}
      />
    </Tab.Navigator>
  );
};

function renderPokeball(focused) {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={
        focused.focused
          ? { width: 70, height: 70, top: -20 }
          : { width: 75, height: 75, top: -15 }
      }
    />
  );
}
