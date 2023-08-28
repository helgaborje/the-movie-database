import { useQuery } from "@tanstack/react-query"
import * as TmdbAPI from "../services/TMDB-API"
import { Badge, Button, Col, Container } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const MovieInfoPage = () => {
	const { id } = useParams()
	const movieId = Number(id)
	const {data} = useQuery(['movie', movieId], () =>  TmdbAPI.getMovieById(movieId))
	console.log(movieId)

	const imageUrl = 'https://image.tmdb.org/t/p/original'

	return (
		<>
			<Container>
				<div className="d-flex justify-content-between w-100 align-items-center">
					<div>
						<h1>{data?.original_title}</h1>
						<span className="text-muted">{data?.release_date}</span>
						<div className='d-flex mt-2'>
							<img className="fluid w-75" src={imageUrl + data?.backdrop_path} alt="" />
						</div>
						<div>
							{data?.genres.map((hit) => (
								<Badge
									key={hit.id}
									as={Link}
									to={`/genres/${hit.name}/${hit.id}`}
									className='p-2 m-1'
									pill bg='secondary'
									text='light'
								>{hit.name}
								</Badge>
							))}
						</div>
						<p>{data?.overview }</p>
					</div>
				</div>
			</Container>
		</>
	)
}

export default MovieInfoPage