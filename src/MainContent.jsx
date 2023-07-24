import { useState } from "react";
import Cards from "./Cards";

const MainContent = () => {
  const [level, setLevel] = useState([4, 6, 8, 10, 12, 14, 16]);
  const [usedPokemon, setUsedPokemon] = useState([]);

  const nextLevel = (pokemonIds) => {
    console.log('next level was triggered');
    const newLevel = level.slice(1);
    const tmpArr = usedPokemon.concat(pokemonIds);
    setLevel(newLevel);
    setUsedPokemon(tmpArr);
  }

  return (
    <section className="main-content">
      <Cards level={level[0]} nextLevel={nextLevel} usedPokemon={usedPokemon} />
    </section>
  )
}

export default MainContent;