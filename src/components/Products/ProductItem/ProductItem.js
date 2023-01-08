import { useContext } from 'react'
import classes from './ProductItem.module.css'
import ProductItemForm from './ProductItemForm'
import CartContext from '../../../store/cart-context'

const ProductItem = props => {
    const cartCtx = useContext(CartContext)
	const price = `zł ${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            imgUrl: props.imgUrl,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

	return (
		<li className={classes.product}>
			<div>
				<div className={classes.imgUrl}>
					<img src={props.imgUrl} alt='' />
				</div>
				<h3>{props.name}</h3>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<ProductItemForm onAddToCart={addToCartHandler}/>
			</div>
		</li>
	)
}

export default ProductItem
