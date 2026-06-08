const api_key = process.env.REACT_APP_TMDB_KEY;
const base_url = "https://api.themoviedb.org/3";

async function fetchFromTMDB(endpoint) {
  try {
    const response = await fetch(`${base_url}/${endpoint}?api_key=${api_key}`);

    if (!response.ok) {
      console.error("TMDB error:", response.status);
      return { results: [] };
    }

    const data = await response.json();
    return data.results ? data : { results: [] };
  } catch (error) {
    console.error("Network error:", error);
    return { results: [] };
  }
}

export const getPopularMovies = () => fetchFromTMDB("movie/popular");
export const getPopularShows = () => fetchFromTMDB("tv/popular");
