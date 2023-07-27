import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

function StartGen(props) {
  const { startGame } = { ...props };
  const generations = [];
  for (let i = 1; i < 6; i += 1) {
    generations.push(`Gen ${i}`);
  }
  const buttons = (
    generations.map(
      (gen, index) => <button type="button" key={uuidv4()} onClick={() => startGame(index + 1)}>{gen}</button>,
    )
  );

  return (
    <div className="start-gen">
      <h1>Choose Your Generation</h1>
      {buttons}
    </div>
  );
}

export default StartGen;
