import { Alert, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import useActor from "../hooks/useActor"

const ActorInfoPage = () => {
    const { id } = useParams()
	const actorId = Number(id)

	const {data, isError, isLoading} = useActor(actorId)

	const imageUrl = 'https://image.tmdb.org/t/p/original'

	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}
			{!isLoading && !isError && (
				<Container>
					<div className="d-flex justify-content-between w-100 align-items-center">
						<div>
							<h1>{data?.name}</h1>
							<span className="">{data?.place_of_birth}</span>
							<div className='d-flex mt-2 justify-content-between align-items-start'>
								<img className="fluid w-25" src={imageUrl + data?.profile_path} alt="" />
								<p className="mb-5 w-75 ms-5">{data?.biography}</p>
							</div>
							<div>
								<h1>Known for</h1>
								<Row>
									{data?.movie_credits.cast.map(hit => (
										<Col
											lg={2} md={4} sm={6}
											key={hit.id}
										>
											<MovieCard
												id={hit.id}
												poster_path={hit.poster_path}
												vote_average={hit.vote_average}
												title={hit.title}
												release_date={0}
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

export default ActorInfoPage