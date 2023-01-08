import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import CartItem from './CartItem'

const Cart = props => {
	const cartCtx = useContext(CartContext)

	const totalAmount = `zł ${cartCtx.totalAmount.toFixed(2)}`
	const hasItems = cartCtx.items.length > 0

	const cartItemRemoveHandler = id => {

	}

	const cartItemAddHandler = item => {

	}

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map(item => (
				<CartItem key={item.id} imgUrl={item.imgUrl} name={item.name} amount={item.amount} price={item.price} onRemowe={cartItemRemoveHandler} onAdd={cartItemAddHandler}/>
			))}
		</ul>
	)

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Suma:</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Zamknij
				</button>
				{hasItems && <button className={classes.button}>Kup</button>}
			</div>
		</Modal>
	)
}

export default Cart
