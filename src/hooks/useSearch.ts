import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"

export const useSearch = (query: string, page: number) => {
  return useQuery(['search', query, page], () => TmdbAPI.getSearchMovies(query, page))
}
