import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

interface SearchFormProps  {
    value: string
    onChange: (e: any) => void
    onSubmit: (e: React.FormEvent) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ value, onChange, onSubmit }) => {
	return (
		<>
			<Form className='mb-1' onSubmit={onSubmit}>
				<Row>
					<Col xs="auto">
						<Form.Control
							onChange={onChange}
							value={value}
							type="text"
							placeholder="Search for movie"
							className="mr-sm-2"
						/>
					</Col>
					<Col xs="auto">
						<Button type="submit">Submit</Button>
					</Col>
				</Row>
			</Form>
		</>
	)
}

export default SearchForm