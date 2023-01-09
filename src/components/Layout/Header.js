import { Fragment } from 'react'
import logo from '../../assets/logo.png'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
	function handleClick() {
		window.scrollTo(0, 0);
	  }

	return (
		<Fragment>
			<header className={classes.header}>
				<img src={logo} alt='logo sklepu miodek' className={classes.logo} onClick={handleClick} />
				<h1>
					Pasieka <span>"Miodek"</span>
				</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
		</Fragment>
	)
}

export default Header
