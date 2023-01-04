import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import classes from './Home.module.css'
import bannerImg from '../../assets/imgbanner.png'

const Home = () => {
	return (
		<Fragment>
			<div className={classes.home}>
				<div className={classes.title}>
					<h1>
						Witaj na stronie pasieki <span>"Miodek"</span>
					</h1>
					<h2>Świeży miód</h2>
					<p>Zapraszamy do zakupów</p>
				</div>
				<div className={classes.picture}>
					<motion.div animate={{ y: [-350, -250, -350] }} transition={{ duration: 5, type: 'tween', repeat: Infinity }}>
						<img className={classes.picture__bee} src={bannerImg} alt='pszczoła' />
					</motion.div>
				</div>
			</div>
		</Fragment>
	)
}

export default Home
