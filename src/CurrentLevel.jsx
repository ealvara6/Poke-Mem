import React from 'react';

function CurrentLevel(props) {
  const { level } = { ...props };

  return (
    <div className="current-level">
      <div>
        Level
        {' '}
        {level}
      </div>
    </div>
  );
}

export default CurrentLevel;
