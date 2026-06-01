const api_key = "a186248a860965c01999ca9146dd395a";
const base_url = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
    const response = await fetch(
        `${base_url}/movie/popular?api_key=${api_key}`
    );
    return response.json();
}

export async function getPopularShows() {
    const response = await fetch(
        `${base_url}/tv/popular?api_key=${api_key}`
    );
    return response.json();
}