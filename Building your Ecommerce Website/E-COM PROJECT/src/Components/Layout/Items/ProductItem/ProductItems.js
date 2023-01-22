import { Fragment, useContext } from "react";
import classes from "./ProductItem.module.css";
import CartContext from "../../../Store/cart-context";
import { Link } from "react-router-dom";



const ProductItems = (props) => {
  const cartCtx = useContext(CartContext);
  

  const addItemToCart = (event) => {
    event.preventDefault();
    cartCtx.addItem({ ...props, quantity: props.quantity });
   
};
 


  return (
    <Fragment>
      
    <div className={classes.Items}>
    
      <h3>{props.title}</h3>
      <Link to={`/products/${props.id}`} className={classes.link}>
      <img className={classes.img} src={props.image} alt="some images"></img>
      <div className={classes.price}>Rs. {props.price}</div>
      <button className={classes.button} onClick={addItemToCart}>Add To cart</button>
      </Link>
    </div>

    
    </Fragment>
);
};
export default ProductItems;
