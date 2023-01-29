import React, { useContext, useEffect } from 'react';
import AppContext from '../../context/appContext';
import Modal from '../Modal/Modal';
import './Cart.css'

export default function Cart(props) {
  const ctxVal = useContext(AppContext);
  const { cartItems } = ctxVal;

  useEffect(() => {
    console.log("ctxVal: ", ctxVal)
  }, []);

  const cartItemsJSX = (
    <ul className='cart-items'>
      {
        cartItems.map((item, idx) => (
          <li key={idx.toString()}>{item?.name}</li>
        ))
      }
    </ul>
  );

  return (
    <Modal closeModal={props.closeCart}>
      {cartItemsJSX}
      <div className='total'>
        <span></span>
        <span></span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={props.closeCart}>Close</button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  )
}
