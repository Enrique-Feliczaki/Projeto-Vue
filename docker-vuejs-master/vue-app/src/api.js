
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

export const fetchPokemons = async (offset = 0, limit = 20) => {
  const response = await api.get(`pokemon?offset=${offset}&limit=${limit}`);
  return response.data.results;
};

export const fetchPokemonDetails = async (name) => {
  const response = await api.get(`pokemon/${name}`);
  return response.data;
};