import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"


const useMovieByGenre = (page: number, genreId: number) => {
  return useQuery(['genres', { page, genreId }],() => TmdbAPI.getMovieByGenre(page, genreId))
}

export default useMovieByGenre