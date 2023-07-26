import { useState } from 'react';
import Header from './Header';
import GameInfo from './GameInfo';
import MainContent from './MainContent';
import Score from './Score';
import Cards from './Cards';
import GameOverModal from './GameOverModal';
import './App.scss';
import CurrentLevel from './CurrentLevel';
import Footer from './Footer';

const App = () => {
  const levels = [4, 6, 8, 10, 12, 14, 16];
  const [level, setLevel] = useState({
    levels,
    currentLevel: 1,
  });
  const [usedPokemon, setUsedPokemon] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const nextLevel = (pokemonIds) => {
    const newLevel = level.levels.slice(1);
    const tmpArr = usedPokemon.concat(pokemonIds);
    setLevel((prevState) => ({
      levels: newLevel,
      currentLevel: prevState.currentLevel + 1,
    }))
    setUsedPokemon(tmpArr);
  }

  const gameOver = () => {
    score > bestScore && setBestScore(score);
    setIsGameOver(true);
  }

  const retry =() => {
    const temparr = [...levels];
    setLevel({
      levels: temparr,
      currentLevel: 1,
    });
    setIsGameOver(false);
    setScore(0);
  }

  const addScore = () => {
    setScore(score + 1);
  }

  return (
    <>
    <Header>
      <Score score={score} bestScore={bestScore} />
    </Header>
    <GameInfo />
    <CurrentLevel level={level.currentLevel} />
    <MainContent>
    <Cards level={level.levels} nextLevel={nextLevel} usedPokemon={usedPokemon} gameOver={gameOver} addScore={addScore} />
    {isGameOver &&
      <GameOverModal retry={retry}>
        <Score score={score} bestScore={bestScore} />
      </GameOverModal>}
    </MainContent>
    <Footer />
    </>
  )
}

export default App
