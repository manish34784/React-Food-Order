import React, { useRef } from 'react';
import './Input.css';

const Input = React.forwardRef(function (props, ref) {

  return (
    <div className='input'>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={ref}
        id={props.id}
        {...props.input}
      />
    </div>
  )
})

export default Input
