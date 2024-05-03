import React, { useState } from 'react';

function PollCreator({ onSave }) {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState('');
  const [question, setQuestion] = useState(''); // Ajouter un état pour la question du sondage

  const handleAddOption = () => {
    if (options.length < 4 && input.trim()) {
      setOptions([...options, input]);
      setInput('');
    }
  };

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value); // Gère la saisie de la question
  };

  const handleSubmit = () => {
    if (options.length > 0 && question) {
      onSave({
        question: question,
        options: options.map((text, index) => ({ id: index, text }))
      });
      setQuestion(''); // Réinitialise la question après l'enregistrement
      setOptions([]);  // Réinitialise les options après l'enregistrement
    }
  };

  return (
    <div className="poll-creator-container">
      <h3 className="poll-creator-title">Créez votre sondage</h3>
      <input
        type="text"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Entrez la question de votre sondage"
        className="poll-creator-question-input"
      />
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Ajoutez une option"
        className="poll-creator-input"
      />
      <button onClick={handleAddOption} disabled={options.length >= 4} className="poll-creator-add-btn">
        Ajouter une option
      </button>
      <ul className="poll-creator-options-list">
        {options.map((option, index) => <li key={index} className="poll-creator-option">{option}</li>)}
      </ul>
      <button onClick={handleSubmit} className="poll-creator-submit-btn">Sauvegarder le sondage</button>
    </div>
  );
}

export default PollCreator;
