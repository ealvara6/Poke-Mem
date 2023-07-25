import Score from './Score';
import Modal from './Modal';

const GameOverModal = (props) => {
  const { retry } = { ...props };
  const header = "Game Over!";
  const body = <Score />
  const retryButton = <button onClick={retry}>Retry</button>

  return (
    <Modal styles="gameover-modal" header={header} body={body} buttons={retryButton} />
  )
}

export default GameOverModal;