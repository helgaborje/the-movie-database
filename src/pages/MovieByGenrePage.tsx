import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"
import { Container, Row, Col, Alert} from "react-bootstrap"
import MovieCard from "../components/MovieCard"
import { useParams, useSearchParams } from "react-router-dom"
import Pagination from "../components/Pagination"


const MovieByGenrePage = () => {
	const [pageParams, setPageParams] = useSearchParams({ page: '1' })
	const { id, name } = useParams()
	const genreId = Number(id)
	const page = pageParams.get("page")
		? Number(pageParams.get("page"))
		: 1
	
	const { data, isError, isLoading } = useQuery(
		['genres', { page, genreId }],
		() => TmdbAPI.getMovieByGenre(page, genreId)
	)
	// const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
	
	return (
		<>
			{isError && <Alert variant='warning'>Something went wrong</Alert>}
			{!isLoading && !isError && (
				<Container>
					<Container>
						<h1>{name}</h1>
						<Row className="g-4 row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
							{data?.results.map(hit => (
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
					</Container>
					
					<Pagination
						page={page}
						total_pages={data?.total_pages}
						hasPreviousPage={data?.page !== 1}
						hasNextPage={data?.page !== data?.total_pages}
								onPreviousPage={() => {
							const prevValue = page -1
							setPageParams({ page: prevValue.toString() })
						}}
								onNextPage={() => {
							const prevValue = page +1
							setPageParams({ page: prevValue.toString() })
						}}
					/>
				</Container>
			)}
		</>
	)
}

export default MovieByGenrePage