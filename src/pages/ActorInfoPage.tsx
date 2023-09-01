import { Alert, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import useActor from "../hooks/useActor"
import SliderCarousel from "../components/SliderCarousel"

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
					<div>
						<h1>{data?.name}</h1>
						<span className="">{data?.place_of_birth}</span>
						<div className='d-flex mt-2 justify-content-between align-items-start'>
							<img className="fluid w-25" src={imageUrl + data?.profile_path} alt="" />
							<p className="mb-5 w-75 ms-5">{data?.biography}</p>
						</div>

						<Container className="card-container">
							<h1>Known for</h1>
							<SliderCarousel data={data?.movie_credits.cast.map(hit => (
								<div
									className='slider-item'
									key={hit.id}
								>
									<MovieCard
										id={hit.id}
										poster_path={hit.poster_path}
										vote_average={hit.vote_average}
										title={hit.title}
										release_date={0}
									/>
								</div>
							))}
							/>
						</Container>
					</div>
				</Container>
			)}
		</>
	)
}

export default ActorInfoPage