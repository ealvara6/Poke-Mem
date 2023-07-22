import './modal.scss';

const Modal = (props) => {
  const { header, body, buttons} = {...props};
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">{header}</div>
        <div className="modal-body">{body}</div>
        <div className="modal-buttons">{buttons}</div>
      </div>
    </div>
  )
}

export default Modal;