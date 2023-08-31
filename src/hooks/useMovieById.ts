import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"


const useMovieById = (movieId: number) => {
  return useQuery(['movie', movieId], () =>  TmdbAPI.getMovieById(movieId))
}

export default useMovieById