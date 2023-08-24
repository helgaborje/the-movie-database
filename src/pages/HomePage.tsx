import { useQuery } from "@tanstack/react-query"
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import * as TmdbAPI from "../services/TMDB-API"
import MovieCard from "../components/MovieCard"

const HomePage = () => {

	const {data} = useQuery(['movies'], TmdbAPI.getPopularMovies )

	return (
		<>
			<Container>
				<Container>
					<h2>Most Popular Movies</h2>
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

export default HomePage