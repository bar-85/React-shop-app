import { useState } from 'react'

import Header from './components/Layout/Header'
import Home from './components/Layout/Home'
import Products from './components/Products/Products'
import Arrow from './components/Layout/Arrow'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {
	const [cartShow, setCartShow] = useState(false)

	const showCartHandler = () => {
		setCartShow(true)
	}

	const hideCartHandler = () => {
		setCartShow(false)
	}

	return (
		<CartProvider>
			{cartShow && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Home />
				<Arrow />
				<Products />
			</main>
		</CartProvider>
	)
}

export default App
