import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './assets/scss/App.scss'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage/>} />
			</Routes>
			{/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
		</>
	)
}

export default App
