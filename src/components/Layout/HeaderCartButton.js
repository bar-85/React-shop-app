import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
	const [btnJump, setbtnJump] = useState(false)
	const cartCtx = useContext(CartContext)

	const { items } = cartCtx

	const numberOfCartItem = items.reduce((curNumber, item) => {
		return curNumber + item.amount
	}, 0)

	const btn = `${classes.button} ${btnJump ? classes.jump : ''}`

	useEffect(() => {
		if (items.length === 0) {
			return
		}
		setbtnJump(true)

		const timer = setTimeout(() => {
			setbtnJump(false)
		}, 300)

		return () => {
			clearTimeout(timer)
		}
	}, [items])

	return (
		<button className={btn} onClick={props.onClick}>
			<span>🛒</span>
			<div className={classes.badge}>{numberOfCartItem}</div>
		</button>
	)
}

export default HeaderCartButton
