import React from 'react';

import './Button.css';

const Button = props => {
  return (
    <button style={{backgroundColor : !(props.item) ? 'red':'#8b005d'}} type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
