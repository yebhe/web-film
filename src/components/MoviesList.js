// src/components/MovieList.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './MoviesList.css';
import tmdb from './Api';
import { MovieContext } from './MovieContext';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const { searchQuery, page, nextPage, previousPage } = useContext(MovieContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const endpoint = searchQuery ? '/search/movie' : '/movie/popular';
        const params = { page };
        if (searchQuery) params.query = searchQuery;

        const response = await tmdb.get(endpoint, { params });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des films:', error);
      }
    };

    fetchMovies();
  }, [page, searchQuery]);

  return (
    <div>
      <div className="pagination">
        <button onClick={previousPage} disabled={page === 1}>
          Précédent
        </button>
        <span>Page {page}</span>
        <button onClick={nextPage}>Suivant</button>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card-link">
            <div className="movie-card">
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
