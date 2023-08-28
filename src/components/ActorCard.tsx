import React from 'react'
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

interface ActorCardProps {
	id?: number
	profile_path: string
	name?: string
	character: string
}

const ActorCard: React.FC<ActorCardProps> = ({
	id,
	profile_path,
	name,
	character,
}) => {

	const imageUrl = 'https://image.tmdb.org/t/p/w300'
	console.log(profile_path)

	return (
		<>
			<Link to={`/movie/${id}`}>

			<Card border='dark' className='bg-dark movie-card'>
				<img className='movie-img' src={imageUrl + profile_path} />
			</Card>
			<h2 className='m-0 mb-1 ms-1'>{name}</h2>
			<span className='m-0 mb-1 ms-1'>as {character}</span>
			</Link>
			</>
	)
}

export default ActorCard
