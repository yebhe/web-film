// src/components/MovieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MoviesDetail.css';
import tmdb from './Api';

const MoviesDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}`);
        setMovie(response.data);
        
        // Récupérer les vidéos
        const videoResponse = await tmdb.get(`/movie/${id}/videos`);
        setVideos(videoResponse.data.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du film:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Date de sortie : {movie.release_date}</p>
      <p>Note : {movie.vote_average}</p>

      {/* Intégration du lecteur vidéo */}
      {videos.length > 0 && (
        <div className="video-container">
          <h3>Regarder la bande-annonce :</h3>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videos[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MoviesDetail;
