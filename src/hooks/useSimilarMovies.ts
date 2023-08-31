import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"

const useSimilarMovies = (movieId: number) => {
  return useQuery(['similar', movieId], () => TmdbAPI.getSimilarMovies(movieId))
}

export default useSimilarMovies