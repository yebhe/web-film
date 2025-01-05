// src/components/SearchBar.js
import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { handleSearchQuery } = useContext(MovieContext);

  const handleSearch = (event) => {
    event.preventDefault();
    handleSearchQuery(input);
  };

  return (
    <form onSubmit={handleSearch} className='form-search'>
      <div>
        <input
          className='btn-recherche'       
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Rechercher un film"
        />
      </div>
      <button type="submit">Rechercher</button>
    </form>
  );
};

export default SearchBar;
