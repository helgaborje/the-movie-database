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

	const rating = Math.round(vote_average * 10) / 10
	const releaseYear = new Date(release_date).getFullYear()

	const imageUrl = 'https://image.tmdb.org/t/p/w500'
	// const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

	// if (poster_path === null) {
	// 	return 	<img className='placeholder-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' />
	// }

	return (
		<>
			<Link to={`/movie/${id}`}>
				<Card border='dark' className='bg-dark movie-card'>
					<img className='movie-img' src={imageUrl + poster_path} />
				</Card>
				<p><AiFillStar className="rating-star" /> {rating}</p>
				<span className='m-0 mb-1 ms-1'>{releaseYear}</span>
				<h2 className='m-0 mb-1 ms-1'>{title}</h2>
			</Link>
		</>
	)
}

export default MovieCard
