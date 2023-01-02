import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import classes from './Home.module.css'
import orange from '../../assets/orange.png'
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
					<img className={classes.picture__orange} src={orange} alt='pomarańczowe tło' />
					<motion.div animate={{ y: [-350, -250, -350] }} transition={{ duration: 5, type: 'tween', repeat: Infinity }}>
						<img
							className={classes.picture__bee}
							style={{ height: '15rem', width: 'auto', zIndex: '2', right: '0rem' }}
							src={bannerImg}
							alt='pszczoła'
						/>
					</motion.div>
				</div>
			</div>
		</Fragment>
	)
}

export default Home
