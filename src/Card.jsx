const Card = (props) => {
  const { id, name, img } = { ...props};
  return (
    <div className="card" id={id}>
      <img src={img} alt={name} />
      <div className="name">
        <div>{name}</div>
      </div>
    </div>
  )
}

export default Card;