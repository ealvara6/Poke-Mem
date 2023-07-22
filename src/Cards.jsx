import { useEffect, useState } from "react";
import Card from "./Card";
import arrayShuffle from 'array-shuffle';


const Cards = () => {
  let pokemonArr = ['pikachu', 'bulbasaur', 'squirtle', 'charmander'];
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const [pokemon, setPokemon] = useState({
    isLoaded: false,
    pokemonData: [],
  });

  const shuffleCards = () => {
    setPokemon({
      isLoaded: true,
      pokemonData: arrayShuffle(pokemon.pokemonData),
    }); 
  }

  useEffect(() => {
      const promises = pokemonArr.map(async (pokemonName) => {
        const response = await fetch(api + pokemonName);
        const json = await response.json();
        const pokemonData = {
          id: json.id,
          name: json.name,
          img: json.sprites.front_default,
        }
        return pokemonData;
      })
      
      Promise.all(promises).then((arr) => {
        setPokemon({
          isLoaded: true,
          pokemonData: arr,
        });
      })
  }, []);

  const cardsArr = pokemon.pokemonData.map((item) => <Card key={item.id} name={item.name} img={item.img} handleClick={shuffleCards} />);

  return (
    <div className="cards">
      {pokemon.isLoaded ? cardsArr : 'loading'}
    </div>
  )
}

export default Cards;