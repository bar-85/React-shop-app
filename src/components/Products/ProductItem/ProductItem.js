import classes from './ProductItem.module.css'
import ProductItemForm from './ProductItemForm'


const ProductItem = props => {
    const price = `zł ${props.price.toFixed(2)}`
	return (
		<li className={classes.product}>
			<div>
                <div className={classes.imgUrl} >
                    <img src={props.imgUrl} alt="" />
                </div>
				<h3>{props.name}</h3>
                <div className={classes.price}>{price}</div>
			</div>
            <div>
                <ProductItemForm />
            </div>
		</li>
	)
}

export default ProductItem
