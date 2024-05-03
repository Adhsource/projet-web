import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
      <input
        type="text"
        placeholder="Search users or topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '300px', marginRight: '10px' }}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
