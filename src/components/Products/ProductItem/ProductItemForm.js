import { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './ProductItemForm.module.css'

const ProductItemForm = props => {
	const [amountIsValid, setAmountIsValid] = useState(true)

	const amountInputRef = useRef()

	const submitHandler = e => {
		e.preventDefault()

		const enteredAmount = amountInputRef.current.value
		const enterdAmountNumber = +enteredAmount

		if (enteredAmount.trim().length === 0 || enterdAmountNumber < 1 || enterdAmountNumber > 10) {
			setAmountIsValid(false)
			return
		}

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
					max: '10',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+</button>
			{!amountIsValid && <p>(1-10)</p>}
		</form>
	)
}

export default ProductItemForm
