const Card = (props) => {
  const { id, name, img, handleClick } = { ...props};
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <img src={img} alt={name} />
      <div className="name">
        <div>{name}</div>
      </div>
    </div>
  )
}

export default Card;