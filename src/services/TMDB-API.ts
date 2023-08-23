import axios from "axios"
import { MoviesResponse } from "../types/TMDB-API.movies.types"

const API_KEY = import.meta.env.VITE_API_KEY
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
    return response.data as T
}

export const getPopularMovies = async () => {
    return get<MoviesResponse>(`movie/popular?api_key=${API_KEY}${adultContent}`)
}