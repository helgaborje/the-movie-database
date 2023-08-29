import React from 'react'
import { useState } from 'react'
import SearchForm from '../components/SearchForm'

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (!searchInput.trim().length) {
			return
		}
	}

	return (
		<SearchForm
			onChange={e => setSearchInput(e.target.value) }
			onSubmit={handleSubmit}
			value={searchInput}
		/>
	)
}

export default SearchPage