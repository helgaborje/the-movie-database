import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

interface ActorCardProps {
	id: number
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

	const imageUrl = 'https://image.tmdb.org/t/p/w185'
	// const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'

	return (
		<>
		<Link to={`/person/${id}`}>
				<Card border='dark' className='bg-dark actor-card'>
					<img className='movie-img fluid' src={imageUrl + profile_path} />
				</Card>
				<h2 className='m-0 mb-1 ms-1'>{name}</h2>
				<span className='m-0 mb-1 ms-1'>as {character}</span>
			</Link>
		</>
	)
}

export default ActorCard
