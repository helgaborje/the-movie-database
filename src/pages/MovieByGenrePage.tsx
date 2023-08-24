import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"
import Navigation from "../components/Navigation"
import { Container, Row, Col } from "react-bootstrap"
import MovieCard from "../components/MovieCard"


const MovieByGenrePage = (page: number, genreId: number) => {
	const { data } = useQuery(['moviegenre', { page, genreId }], () => TmdbAPI.getMovieByGenre(page, genreId))
	
	return (
		<>
		<Navigation />
		<Container>
			<Container>
				<h2>Genre name here</h2>
				<Row className="g-4 row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
					{data?.results.map(hit => (
						<Col key={hit.id}>
							<MovieCard
								poster_path={hit.poster_path}
								vote_average={hit.vote_average}
								title={hit.title}
								release_date={hit.release_date}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	</>
    
  )
}

export default MovieByGenrePage