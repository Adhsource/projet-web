import React, { useState } from 'react';
import PollOption from './PollOption';
import './styles.css'; // Importer le CSS ici

function PollComponent({ pollData }) {
  const [votes, setVotes] = useState(new Array(pollData.options.length).fill(0));

  const handleVote = (optionId) => {
    const newVotes = votes.map((vote, index) => index === optionId ? vote + 1 : vote);
    setVotes(newVotes);
  };

  return (
    <div className="poll-container">
      <h2 className="poll-question">{pollData.question}</h2>
      {pollData.options.map((option, index) => (
        <PollOption key={option.id} option={option} onVote={() => handleVote(index)} />
      ))}
      <ul className="poll-results">
        {pollData.options.map((option, index) => (
          <li key={option.id}>{option.text}: {votes[index]} votes</li>
        ))}
      </ul>
    </div>
  );
}

export default PollComponent;
