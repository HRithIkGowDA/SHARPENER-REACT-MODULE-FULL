import React, {useContext} from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);

  const onRemoveCartHandler = (id) => {
    cartCtx.removeItem(id);
  }

  const onAddCartHandler = (item) => {
    item = {...item, amount: 1};
    cartCtx.addItem(item);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((items) => (
        <CartItem key={items.id} name={items.name} amount={items.amount} price={items.price} onRemove={onRemoveCartHandler.bind(null, items.id)} onAdd={onAddCartHandler.bind(null, items)}/>
      ))}
    </ul>
  );

  let cartHasItem = cartCtx.items.length > 0;

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        {cartHasItem && <button className={classes.button}>Order</button>}
        <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
      </div>
    </Modal>
  );
};

export default Cart;
