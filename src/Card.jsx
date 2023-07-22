const Card = (props) => {
  const { id, name, img, handleClick } = { ...props};
  return (
    <div className="card" id={id} onClick={handleClick}>
      <img src={img} alt={name} />
      <div className="name">
        <div>{name}</div>
      </div>
    </div>
  )
}

export default Card;