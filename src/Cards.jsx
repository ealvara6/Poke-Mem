import { useEffect, useState } from "react";
import Card from "./Card";


const Cards = () => {
  const pokemonArr = ['pikachu', 'bulbasaur', 'squirtle', 'charmander'];
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const [pokemon, setPokemon] = useState({
    isLoaded: false,
    pokemonData: [],
  });

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
        const newArr = arr.map((item) => <Card key={item.id} name={item.name} img={item.img} />);
        setPokemon({
          isLoaded: true,
          pokemonData: newArr,
        });
      })
  }, []);
  return (
    <div className="cards">
      {pokemon.isLoaded ? pokemon.pokemonData : 'loading'}
    </div>
  )
}

export default Cards;