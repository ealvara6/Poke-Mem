const StartGen = (props) => {
  const { startGame } = { ...props };
  const generations = [];
  for (let i = 1; i < 6; i += 1) {
    generations.push(`Gen ${i}`)
  }
  const buttons = generations.map((gen, index) => <button key={index} onClick={() => startGame(index + 1)}>{gen}</button>);

  return (
    <div className="start-gen">
      <h1>Choose Your Generation</h1>
      {buttons}
    </div>
  )
}

export default StartGen;