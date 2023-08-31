import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"
import { Alert, Badge, Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import ActorCard from "../components/ActorCard"
import { Cast } from "../types/TMDB-API.movie-info.types"
import MovieCard from "../components/MovieCard"

const MovieInfoPage = () => {
	const { id } = useParams()
	const movieId = Number(id)

	const {data, isError, isLoading} = useQuery(['movie', movieId], () =>  TmdbAPI.getMovieById(movieId))
	const {data: similarMovie} = useQuery(['similar', movieId], () => TmdbAPI.getSimilarMovies(movieId))

	const imageUrl = 'https://image.tmdb.org/t/p/original'
	const posterUrl = 'https://image.tmdb.org/t/p/w500'

	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}
			{!isLoading && !isError && (
				<Container>
					<div className="d-flex justify-content-between w-100 align-items-center">
						<div>
							<h1>{data?.original_title}</h1>
							<p><strong>Release date </strong>{data?.release_date}</p>
							<p><strong>Runtime </strong>{data.runtime} minutes</p>
							<div className='d-flex mt-2'>
								<img className="fluid w-25 me-1" src={posterUrl + data?.poster_path} alt="" />
								<img className="fluid w-75" src={imageUrl + data?.backdrop_path} alt="" />
							</div>
							<div>
								{data?.genres.map((hit) => (
									<Badge
										key={hit.id}
										as={Link}
										to={`/genres/${hit.name}/${hit.id}`}
										className='genre-badge p-2 m-1 ps-3 pe-3'
										pill bg='secondary'
										text='light'
									>{hit.name}
									</Badge>
								))}
							</div>
							
							<p>{data?.overview}</p>
							<div>
								<hr />
								<h2>Cast</h2>
								<Row>
									{data?.credits.cast.map((actor: Cast) => (
										<Col
											lg={2} md={4} sm={6}
											key={actor.id}
										
										><ActorCard
												id={actor.id}
												name={actor.name}
												profile_path={actor.profile_path}
												character={actor.character}
											/>
										
										</Col>
									))

									}
								</Row>
							</div>
<hr />
							<div>
							<h2>You might also like</h2>
							<Row className="g-4 row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
							{similarMovie?.results.map(hit => (
								<Col
									lg={3} md={4} sm={6}
									key={hit.id}
								>
									<MovieCard
										id={hit.id}
										poster_path={hit.poster_path}
										vote_average={hit.vote_average}
										title={hit.title}
										release_date={hit.release_date}
									/>
								</Col>
							))}
						</Row>
							</div>

						</div>
					</div>
				</Container>
				)}
		</>
	)
}

export default MovieInfoPage