import { useEffect, useState } from "react";
import Card from "./Card";
import arrayShuffle from 'array-shuffle';
import Loading from "./Loading";


const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Cards = (props) => {
  const {
    level,
    nextLevel,
    usedPokemon,
    gameOver,
    addScore,
    generation,
  } = { ...props };

  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState({
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

    setIsLoaded(true);
    setPokemon({
      pokemonIds: pokemon.pokemonIds,
      pokemonData: arrayShuffle(newArr),
    });
    addScore();
  }

  const pokemonArr = [];
  let id;
  for (let i = 0; i < level[0]; i += 1) {
    do {
      id = randomIntFromInterval(generation.min, generation.max);
    }
    while (pokemonArr.includes(id) || usedPokemon.includes(id));
    pokemonArr.push(id);
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
        setIsLoaded(true);
        setPokemon({
          pokemonIds: pokemonArr,
          pokemonData: arr,
        });
      }).catch((e) => console.log(e));

    return setIsLoaded(false);

  }, [level, usedPokemon, generation.min, generation.max]);

  const cardsArr = pokemon.pokemonData.map((item) => {
  return <Card key={item.id} id={item.id} name={item.name} img={item.img} handleClick={handleClick} />
});

  return (
    <div className="cards">
      {isLoaded ? cardsArr : <Loading />}
    </div>
  )
}

export default Cards;