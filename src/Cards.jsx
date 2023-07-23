import { useEffect, useState } from "react";
import Card from "./Card";
import arrayShuffle from 'array-shuffle';
import data from './data.json';


const Cards = () => {
  let pokemonArr = data[0];
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const [pokemon, setPokemon] = useState({
    isLoaded: false,
    pokemonData: [],
  });

  const handleClick = (id) => {
    const newArr = pokemon.pokemonData.map((item) => {
      if (item.id === id) {
        if (item.isclicked) console.log(`${item.name} was clicked twice`);
        else item.isclicked = true;
      }
      return item;
    });

    setPokemon({
      isLoaded: true,
      pokemonData: arrayShuffle(newArr),
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
          isclicked: false,
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

  const cardsArr = pokemon.pokemonData.map((item) => {
  return <Card key={item.id} id={item.id} name={item.name} img={item.img} handleClick={handleClick} />
});

  return (
    <div className="cards">
      {pokemon.isLoaded ? cardsArr : 'loading'}
    </div>
  )
}

export default Cards;