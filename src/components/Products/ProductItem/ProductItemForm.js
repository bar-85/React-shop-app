import { useRef } from 'react'
import Input from '../../UI/Input'
import classes from './ProductItemForm.module.css'

const ProductItemForm = props => {
	const amountInputRef = useRef()

	const submitHandler = e => {
		e.preventDefault()

		const enteredAmount = amountInputRef.current.value
		const enterdAmountNumber = +enteredAmount

		props.onAddToCart(enterdAmountNumber)
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				className={classes.input}
				label='Ilość:'
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+</button>
		</form>
	)
}

export default ProductItemForm
