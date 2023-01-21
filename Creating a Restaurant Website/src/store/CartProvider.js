import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {

  if (action.type === 'ADD') {

    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems;

    if(existingCartItemIndex !== -1) {
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.item.amount};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } 
    else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedAmount };
  }

  if (action.type === 'REMOVE') {

    const removeItemIndex = state.items.findIndex((item) => (item.id === action.id));

    let updatedItems = [...state.items];

    const updatedAmount = state.totalAmount-updatedItems[removeItemIndex].price;

    if(updatedItems[removeItemIndex].amount > 1) {
      updatedItems[removeItemIndex].amount = updatedItems[removeItemIndex].amount - 1; 
    }
    else {
      updatedItems = updatedItems.filter((item) => (item.id !== action.id));
    }

    return{ items: updatedItems, totalAmount: updatedAmount};
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatchedCartAction] = useReducer(
    cartReducer,
    defaultState
  );

  const addItemToCartHandler = (item) => {
    dispatchedCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchedCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
