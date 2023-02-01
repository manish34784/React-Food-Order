import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/appContext';
import Modal from '../Modal/Modal';
import './Cart.css'
import CartItem from './CartItem';

export default function Cart(props) {
  const ctxVal = useContext(AppContext);
  const { cartItems, handleIncreaseFromWithinCart, handleDecreaseFromWithinCart  } = ctxVal;

  useEffect(() => {
    // console.log("ctxVal: ", ctxVal)
  }, []);

  const cartItemsJSX = (
    <ul className='cart-items'>
      {
        cartItems.map((item, idx) => (
          <CartItem
            key={idx.toString()}
            price={item.price}
            name={item.name}
            amount={(+item.orderQuantity)}
            onAdd={() => { handleIncreaseFromWithinCart(item?.id, +item.orderQuantity) }}
            onRemove={() => { handleDecreaseFromWithinCart(item?.id, +item.orderQuantity) }}
          />
        ))
      }
    </ul>
  );

  const getTotalAmount = () => {
    let total = 0;
    cartItems?.forEach((item) => {
      total += (item.price * Number(item.orderQuantity))
    });
    return total.toFixed(2);
  }

  return (
    <Modal closeModal={props.closeCart}>
      {cartItemsJSX}
      <div className='total'>
        <span>Total Amount</span>
        <span>{getTotalAmount()}</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={props.closeCart}>Close</button>
        {cartItems.length !== 0 && <button className='button'>Order</button>}
      </div>
    </Modal>
  )
}
