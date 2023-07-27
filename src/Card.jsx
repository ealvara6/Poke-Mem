import React from 'react';

function Card(props) {
  const {
    id, name, img, handleClick,
  } = { ...props };
  return (
    <button className="card" type="button" onClick={() => handleClick(id)}>
      <img src={img} alt={name} />
      <div className="name">
        <div>{name}</div>
      </div>
    </button>
  );
}

export default Card;
