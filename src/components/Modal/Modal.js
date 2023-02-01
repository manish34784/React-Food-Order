import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';


const Backdrop = (bdProps) => {
  return (
    <div className='backdrop' onClick={bdProps.onClick} />
  );
}

const ModalOverlay = (moProps) => {
  return (
    <div className='modal'>
      {moProps.children}
    </div>
  );
}


export default function Modal(props) {


  const portalElement = document.getElementById('overlays');
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.closeModal} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}
