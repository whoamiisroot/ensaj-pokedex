import React, { useState, useEffect } from "react";

//Components
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemonApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

//Styles
import { styles } from "../styles/";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextURL, setNextURL] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonApi(nextURL);
      setNextURL(response.next);
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          url: pokemonDetails.url,
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.pokedexContainer}>
      <StatusBar style="auto" />
      <PokemonList
        pokemon={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextURL}
      />
    </SafeAreaView>
  );
}
