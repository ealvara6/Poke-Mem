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
import StartGen from './StartGen';

const App = () => {
  const levels = [4, 5, 6, 7, 8, 9, 10];
  const [level, setLevel] = useState({
    levels,
    currentLevel: 1,
  });
  const [start, setStart] = useState({
    start: false,
    generation: null,
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

  const startGame = (generation) => {
    let min;
    let max;
    switch (generation) {
      case 1:
        min = 1;
        max = 151;
        break;
      case 2:
        min = 152;
        max = 251;
        break;
      case 3:
        min = 252;
        max = 386;
        break;
      case 4:
        min = 387;
        max = 493;
        break;
    }
    setStart({
      start: true,
      generation: {
        min,
        max,
      }
    });
  }

  const newGen = () => {
    setStart({
      start: false,
      generation: null,
    })
    retry();
  }

  return (
    <>
    <Header>
      <Score score={score} bestScore={bestScore} />
    </Header>
    <MainContent>
      {start.start ?
      <>
      <GameInfo />
      <CurrentLevel level={level.currentLevel} />
      <Cards
        level={level.levels}
        nextLevel={nextLevel}
        usedPokemon={usedPokemon}
        gameOver={gameOver}
        addScore={addScore}
        generation={start.generation}
      />
      {isGameOver &&
        <GameOverModal newGen={newGen} retry={retry}>
          <Score score={score} bestScore={bestScore} />
        </GameOverModal>}
      </> :
      <StartGen startGame={startGame} />
      }
    </MainContent>
    <Footer />
    </>
  )
}

export default App
