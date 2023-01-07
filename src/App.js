import { Fragment } from 'react'

import Header from './components/Layout/Header'
import Home from './components/Layout/Home'
import Products from './components/Products/Products'
import Arrow from './components/Layout/Arrow'

function App() {
	return (
		<Fragment>
			<Header />
			<main>
				<Home />
				<Arrow />
				<Products />
			</main>
		</Fragment>
	)
}

export default App
