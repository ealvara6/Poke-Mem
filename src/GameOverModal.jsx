import Modal from './Modal';

const GameOverModal = (props) => {
  const {newGen, retry, children} = { ...props };
  const header = "Game Over!";
  const retryButton = [<button key="new-gen" onClick={newGen}>New Gen</button> ,<button onClick={retry} key="retry">Retry</button>]

  return (
    <Modal styles="gameover-modal" header={header} body={children} buttons={retryButton} />
  )
}

export default GameOverModal;