import React from 'react';
import Modal from './Modal';

function GameOverModal(props) {
  const { newGen, retry, children } = { ...props };
  const header = 'Game Over!';
  const retryButton = [<button type="button" key="new-gen" onClick={newGen}>New Gen</button>, <button type="button" onClick={retry} key="retry">Retry</button>];

  return (
    <Modal styles="gameover-modal" header={header} body={children} buttons={retryButton} />
  );
}

export default GameOverModal;
