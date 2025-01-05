// src/api.js
import axios from 'axios';

const API_KEY = '32e6798055f1b7e5324b39822b700d8d';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'fr-FR',
  },
});

export default tmdb;
