import React from 'react';

function Score(props) {
  const { score, bestScore } = { ...props };

  return (
    <div className="scoreboard">
      <div className="current-score">
        Score:
        {' '}
        {score}
      </div>
      <div className="best-score">
        Best Score:
        {' '}
        {bestScore}
      </div>
    </div>
  );
}

export default Score;
