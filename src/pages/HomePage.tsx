import { useQuery } from "@tanstack/react-query"
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import * as TmdbAPI from "../services/TMDB-API"
import MovieCard from "../components/MovieCard"
import Alert from "react-bootstrap/Alert"

const HomePage = () => {


	const { data: popular,  isLoading, isError } = useQuery(['trending'], TmdbAPI.getPopularMovies)
	const { data: rated } = useQuery(['top-rated'], TmdbAPI.getTopRatedMovies)
	const { data: playing } = useQuery(['now-playing'], TmdbAPI.getNowPlayingMovies )

	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}
			{!isLoading && !isError && (
				<>
					<Container className="card-container">
					<h1>Most Popular Movies</h1>
					<Row className="g-4 justify-content-center">
						{popular?.results.map(hit => (
							<Col
								lg={3} md={4} sm={6}
								key={hit.id}
								style={{ width: '10rem' }}
							>
								<MovieCard
									id={hit.id}
									poster_path={hit.poster_path}
									vote_average={hit.vote_average}
									title={hit.title}
									release_date={hit.release_date} />
							</Col>
						))}
					</Row>
					</Container>

					<Container className="card-container">
						<h1>Top Rated Movies</h1>
						<Row className="g-4 justify-content-center">
							{rated?.results.map(hit => (
								<Col
									lg={3} md={4} sm={6}
									key={hit.id}
									style={{ width: '10rem' }}
								>
									<MovieCard
										id={hit.id}
										poster_path={hit.poster_path}
										vote_average={hit.vote_average}
										title={hit.title}
										release_date={hit.release_date} />
								</Col>
							))}
						</Row>
					</Container>

					<Container className="card-container">
						<h1>Now in Cinemas</h1>
						<Row className="g-4 justify-content-center">
							{playing?.results.map(hit => (
								<Col
									lg={3} md={4} sm={6}
									key={hit.id}
									style={{ width: '10rem' }}
								>
									<MovieCard
										id={hit.id}
										poster_path={hit.poster_path}
										vote_average={hit.vote_average}
										title={hit.title}
										release_date={hit.release_date} />
								</Col>
							))}
						</Row>
					</Container>
				</>
			)}
		</>
	)
}

export default HomePage