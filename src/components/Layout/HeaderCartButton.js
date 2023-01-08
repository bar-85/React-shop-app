import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
	const cartCtx = useContext(CartContext)

	const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span>🛒</span>
			<div className={classes.badge}>{numberOfCartItem}</div>
		</button>
	)
}

export default HeaderCartButton
