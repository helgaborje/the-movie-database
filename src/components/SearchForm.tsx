import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

interface SearchFormProps  {
	onHandlseSearch: (search: string) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ onHandlseSearch }) => {
	const [searchInput, setSearchInput] = useState("")
	
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!searchInput.trim().length) {
			return
		}
		onHandlseSearch(searchInput)
	}

	return (
		<>
			<Form className='mb-4' onSubmit={handleSubmit}>
				<div className="m-2">
					<Form.Group className="mb-3" controlId="querySearch">
						<Form.Control
							onChange={e => setSearchInput(e.target.value) }
							type="text"
							placeholder="Search for movie"
							value={searchInput}
						/>
					</Form.Group>
					<div className="d-flex justify-content-end">
						<Button
							className='button'
							variant="outline-success"
							type="submit"
							disabled={!searchInput.trim().length}
						>Search</Button>
					</div>
				</div>
			</Form>
		</>
	)
}

export default SearchForm