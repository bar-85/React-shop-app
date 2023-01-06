import React from 'react'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
	return (
		<button className={classes.button}>
			<span>🛒</span>
			<div className={classes.badge}>1</div>
		</button>
	)
}

export default HeaderCartButton
