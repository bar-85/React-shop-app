import React from 'react'
import classes from './Arrow.module.css'

const ScrollDownArrow = () => {
	return (
		<div className={classes.arrows}>
			<div className={classes.scroll}>
				<div className={classes.arrow}></div>
				<div className={classes.arrow}></div>
				{/* <div className={classes.arrow}></div> */}
			</div>
		</div>
	)
}

export default ScrollDownArrow
