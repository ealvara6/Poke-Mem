import { useEffect, useState } from "react";
import Card from "./Card";
import arrayShuffle from 'array-shuffle';


const Cards = (props) => {
  const { level, nextLevel, usedPokemon, gameOver } = { ...props };
  // console.log(level);
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const [pokemon, setPokemon] = useState({
    isLoaded: false,
    pokemonIds: [],
    pokemonData: [],  
  });

  const checkLevel = () => {
    if (pokemon.pokemonData.every((item) => item.isclicked)) {
      nextLevel(pokemon.pokemonIds);
    }
  }

  const handleClick = (id) => {
    const clickedPokemon = pokemon.pokemonData.find((item) => item.id === id);
    if (clickedPokemon.isclicked) {
      return gameOver();
    }

    const newArr = pokemon.pokemonData.map((item) => {
      if (item.id === id) {
        item.isclicked = true;
      }
      return item;
    });

    checkLevel();

    setPokemon({
      isLoaded: true,
      pokemonIds: pokemon.pokemonIds,
      pokemonData: arrayShuffle(newArr),
    });
  }

  useEffect(() => {
    const pokemonArr = [];
    let id = undefined;
    for (let i = 0; i < level[0]; i += 1) {
      do {
        id = Math.floor(Math.random() * 150) + 1;
      }
      while (pokemonArr.includes(id) || usedPokemon.includes(id));
      pokemonArr.push(id);
    }
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
          pokemonIds: pokemonArr,
          pokemonData: arr,
        });
      }).catch((e) => console.log(e));
  }, [level, usedPokemon]);

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