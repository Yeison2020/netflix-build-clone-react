const API_KEY = `df096ea35ac4428bc111a12ba1cbc1d6`;

const requests = {
  fetchTreding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks-123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
  fetchRomaceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
