import { useQuery } from "@tanstack/react-query"
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import * as TmdbAPI from "../services/TMDB-API"
import MovieCard from "../components/MovieCard"
import Navigation from "../components/Navigation"

const HomePage = () => {

	const {data} = useQuery(['movies'], TmdbAPI.getPopularMovies )

	return (
		<>
			<Navigation/>
			<Container>
				<Row xs={1} md={2} lg={3} xxl={4} className="g-4">
						{data?.results.map(hit => (
							<Col lg={3} md={4} sm={10} key={hit.id}>
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
		</>
	)
}

export default HomePage