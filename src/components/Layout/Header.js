import { Fragment } from 'react'
import logo from '../../assets/logo.png'
import classes from './Header.module.css'

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<img src={logo} alt='logo sklepu miodek' className={classes.logo} />
				<h1>
					Pasieka <span>"Miodek"</span>
				</h1>
				<button>🛒</button>
			</header>
		</Fragment>
	)
}

export default Header
