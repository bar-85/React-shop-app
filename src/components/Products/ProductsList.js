import classes from './ProductsList.module.css'
import Card from '../UI/Card'
import ProductItem from './ProductItem/ProductItem'
import honey1 from '../../assets/honey1.png'
import honey2 from '../../assets/honey2.png'
import honey3 from '../../assets/honey3.png'
import honey4 from '../../assets/honey4.png'

export const DUMMY_PRODUCTS = [
	{
		id: 1,
		name: 'Miód wielokwiatowy',
		price: 50,
		imgUrl: honey3,
	},
	{
		id: 2,
		name: 'Pyłek kwiatowy',
		price: 75,
		imgUrl: honey2,
	},
	{
		id: 3,
		name: 'Plaster miodu',
		price: 100,
		imgUrl: honey4,
	},
	{
		id: 4,
		name: 'Pszczoły miodne',
		price: 500,
		imgUrl: honey1,
	},
]

const ProductsList = () => {
	const prosuctsList = DUMMY_PRODUCTS.map(product => (
		<ProductItem id={product.id} key={product.id} name={product.name} price={product.price} imgUrl={product.imgUrl} />
	))

	return (
		<section className={classes.products}>
			<Card>
				<ul>{prosuctsList}</ul>
			</Card>
		</section>
	)
}

export default ProductsList
