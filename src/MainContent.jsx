import { useState } from "react";
import Cards from "./Cards";
import GameOverModal from "./GameOverModal";

const levels = [4, 6, 8, 10, 12, 14, 16]

const MainContent = (props) => {
  const { children } = { ...props};
  // const [level, setLevel] = useState(levels);
  // const [usedPokemon, setUsedPokemon] = useState([]);
  // const [isGameOver, setIsGameOver] = useState(false);

  // const nextLevel = (pokemonIds) => {
  //   const newLevel = level.slice(1);
  //   const tmpArr = usedPokemon.concat(pokemonIds);
  //   setLevel(newLevel);
  //   setUsedPokemon(tmpArr);
  // }

  // const gameOver = () => {
  //   setIsGameOver(true);
  // }

  // const retry =() => {
  //   const temparr = [...levels];
  //   setLevel(temparr);
  //   setIsGameOver(false);
  // }

  return (
    <section className="main-content">
      {/* <Cards level={level} nextLevel={nextLevel} usedPokemon={usedPokemon} gameOver={gameOver} />
      {isGameOver && <GameOverModal retry={retry} />} */}
      {children}
    </section>
  )
}

export default MainContent;