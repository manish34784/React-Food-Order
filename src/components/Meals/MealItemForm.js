import React, { useContext } from 'react';
import AppContext from '../../context/appContext';
import Input from '../Input/Input';
import './MealItemForm.css'

export default function MealItemForm(props) {
  const { handleAddToCart, handleQuantityChange } = useContext(AppContext)

  const handleSubmitPress = (e) => {
    e.preventDefault();
    handleAddToCart(props.mealId);
  }

  return (
    <form className='form' onSubmit={handleSubmitPress}>
      <Input
        id={props.mealId}
        label={'Amount'}
        input={{
          type: 'number',
          value: props?.quantity,
          min: '1',
          onChange: (e) => { handleQuantityChange(e.target.value, props?.mealId) }
        }}
      />
      <button>+ Add</button>
    </form>
  )
}
