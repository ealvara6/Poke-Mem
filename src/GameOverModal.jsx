import Modal from './Modal';

const GameOverModal = (props) => {
  const {retry, children} = { ...props };
  const header = "Game Over!";
  const retryButton = <button onClick={retry}>Retry</button>

  return (
    <Modal styles="gameover-modal" header={header} body={children} buttons={retryButton} />
  )
}

export default GameOverModal;