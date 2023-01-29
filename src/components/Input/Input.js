import React from 'react';
import './Input.css';

export default function Input(props) {
  // console.log(props)
  return (
    <div className='input'>
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} {...props.input} />
    </div>
  )
}
