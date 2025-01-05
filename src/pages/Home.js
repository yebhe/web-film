// src/App.js
import React, { useState } from 'react';
import './Home.css';
import SearchBar from '../components/SearchBar';
import MoviesList from '../components/MoviesList';
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src="/logo.jpg" alt="logo" width={150}/>
        <div>
          <h1 className="app-title">Explore Movies</h1>
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>
      <main className="content">
        <MoviesList searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default Home;
