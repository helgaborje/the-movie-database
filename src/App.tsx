import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const App = () => {
	return (
		<>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	)
}

export default App
