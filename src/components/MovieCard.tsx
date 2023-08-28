import React from 'react'
import Card from 'react-bootstrap/Card'
import {AiFillStar} from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface MovieCardProps {
	id: number
	poster_path: string
	title: string
	vote_average?: number
	release_date?: number
}

const MovieCard: React.FC<MovieCardProps> = ({
	id,
	poster_path,
	title,
	vote_average,
	release_date,
}) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w500'

	return (
		<>
			<Link to={`/movie/${id}`}>
				<Card border='dark' className='bg-dark movie-card'>
					<img className='movie-img' src={imageUrl + poster_path} />
				</Card>
				<p><AiFillStar /> {vote_average}</p>
				<h2 className='m-0 mb-1 ms-1'>{title}</h2>
				<span className='m-0 mb-1 ms-1'>{release_date}</span>
			</Link>
		</>
	)
}

export default MovieCard
