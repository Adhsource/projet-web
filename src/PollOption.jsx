import React from 'react';

function PollOption({ option, onVote }) {
  return (
    <button onClick={() => onVote(option.id)} style={{ margin: '5px', padding: '10px' }}>
      {option.text}
    </button>
  );
}

export default PollOption;
