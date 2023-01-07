import Input from '../../UI/Input'
import classes from './ProductItemForm.module.css'

const ProductItemForm = (props) => {
  return (
    <form className={classes.form}>
        <Input className={classes.input} label='Ilość:' input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: '1',
            max: '10',
            step: '1',
            defaultValue: '1',
        }}/>
        <button>+</button>
    </form>
  )
}

export default ProductItemForm