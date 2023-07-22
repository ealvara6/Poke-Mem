import Card from "./Card";

const cardsArr = ['data1', 'data2', 'data3', 'data4'];

const Cards = () => {
  const cards = cardsArr.map((card, index) => <Card key={index} /> );

  return (
    <div className="cards">
      {cards}
    </div>
  )
}

export default Cards;