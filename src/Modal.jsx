import React from 'react';
import './modal.scss';

function Modal(props) {
  const {
    header, body, buttons, styles,
  } = { ...props };
  return (
    <div className="modal">
      <div className={`modal-content ${styles}`}>
        <div className="modal-header">{header}</div>
        <div className="modal-body">{body}</div>
        <div className="modal-buttons">{buttons}</div>
      </div>
    </div>
  );
}

export default Modal;
