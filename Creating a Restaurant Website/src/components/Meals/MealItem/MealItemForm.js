import React, { useRef } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {

  const cartAmount = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onCartAmount(cartAmount.current.value);
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={cartAmount}
        label='Amount'
        input={{
          type: 'number',
          id: 'amount__' + props.id,
          min: '1',
          defaultValue: '1',
          step: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
