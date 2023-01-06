import { Fragment } from 'react'
import Header from './components/Layout/Header'
import Home from './components/Layout/Home'
import Products from './components/Products/Products'

function App() {
	return (
		<Fragment>
			<Header />
			<main>
				<Home />
				<Products />
			</main>
		</Fragment>
	)
}

export default App
