import axios from "axios"
import { MoviesResponse } from "../types/TMDB-API.movies.types"
import { GenresResponse } from "../types/TMDB-API.genres.types"
import { Movie } from "../types/TMDB-API.movie-info.types"
import { Actor } from "../types/TMDB-API.actor-info.types"

const API_KEY = import.meta.env.VITE_API_KEY
const DELAY = 2500
const adultContent = "&include_adult=false"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export const get = async <T>(endpoint: string) => {
    const response = await instance.get(endpoint)

    !!DELAY && await new Promise(resolve => setTimeout(resolve, DELAY))

    return response.data as T
}

export const getGenres = async () => {
    return get<GenresResponse>(`genre/movie/list?api_key=${API_KEY}&region=se&language=en-US&${adultContent}`)
}

export const getPopularMovies = async () => {
    return get<MoviesResponse>(`movie/popular?api_key=${API_KEY}&region=se&language=en-US&${adultContent}`)
}

export const getTopRatedMovies = async () => {
    return get<MoviesResponse>(`movie/top_rated?api_key=${API_KEY}&region=se&language=en-US&${adultContent}`)
}

export const getNowPlayingMovies = async () => {
    return get<MoviesResponse>(`movie/now_playing?api_key=${API_KEY}&region=se&language=en-US&${adultContent}`)
}

export const getMovieByGenre = async (page: number, genreId: number) => {
    return get<MoviesResponse>(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&page=${page}&region=se&with_genres=${genreId}${adultContent}`)
}

export const getMovieById = async (movieId: number) => {
    return get<Movie>(`movie/${movieId}?api_key=${API_KEY}&region=se&language=en-US&${adultContent}&append_to_response=credits`)
}

export const getActorById = async (actorId: number) => {
    return get<Actor>(`person/${actorId}?api_key=${API_KEY}&region=se&language=en-US&${adultContent}&append_to_response=movie_credits`)
}