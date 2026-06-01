import { useEffect, useState } from "react";
import { getPopularMovies, getPopularShows } from "../services/TMDB";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function loadData() {
            const movieData = await getPopularMovies();
            const showData = await getPopularShows();

            setMovies(movieData.results);
            setShows(showData.results);
        }
        loadData();
    }, []);

    return (
        <div>
            <h2>Popular Movies</h2>

            {movies.map(movie => (
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title} />
                    <p>Rating: {movie.vote_average}</p>
                </div>
            ))}

            <h2>Popular TV Shows</h2>

            {shows.map(show => (
                <div key={show.id}>
                    <h3>{show.name}</h3>
                    <img src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                    alt={show.name} />
                    <p>Rating: {show.vote_average}</p>
                </div>
            ))}
        </div>
    );
}

export default Movies;