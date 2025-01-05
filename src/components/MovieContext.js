// src/contexts/MovieContext.js
import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
    setPage(1); // Réinitialise la page lors d'une nouvelle recherche
  };

  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const previousPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <MovieContext.Provider
      value={{ searchQuery, page, handleSearchQuery, nextPage, previousPage }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
