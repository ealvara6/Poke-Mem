import React, { useState } from 'react';
import Modal from './Modal';

function RulesModal(props) {
  const { closeModal } = { ...props };
  const header = 'RULES';
  const body = (
    <>
      The goal of the game is to
      click on as many cards as you can without clicking on the same card twice.
    </>
  );
  const buttons = <button type="button" onClick={closeModal}>Close</button>;

  return (
    <Modal header={header} body={body} buttons={buttons} />
  );
}

function Rules() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button type="button" className="rules" onClick={openModal}>Rules</button>
      {showModal ? <RulesModal closeModal={closeModal} /> : null}
    </>
  );
}

export default Rules;
