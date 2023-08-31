import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"

const useGenres = () => {
  return useQuery(['genres'],() => TmdbAPI.getGenres())
}

export default useGenres