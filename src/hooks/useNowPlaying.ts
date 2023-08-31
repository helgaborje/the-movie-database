import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"

const useNowPlaying = () => {
	return useQuery(['now-playing'], TmdbAPI.getNowPlayingMovies)
}

export default useNowPlaying