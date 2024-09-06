const API_KEY = "e003b8661f2d905147422226f054388b";
// const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fecthActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fecthComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fecthHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fecthRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fecthDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fecthTvShow: `/tv/popular?api_key=${API_KEY}&language=en-uspage=1`
};
export default requests;
