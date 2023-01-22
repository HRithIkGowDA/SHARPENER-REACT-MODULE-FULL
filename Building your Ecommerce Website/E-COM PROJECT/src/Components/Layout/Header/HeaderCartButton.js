import { Fragment, useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";
import LoginContext from "../../Store/LoginContext";
import { useHistory } from "react-router-dom";

const HeaderCartButton = (props) => {
  const history = useHistory();
  const cartCtx = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const authCtx = useContext(LoginContext);

  useEffect(() => {
    setQuantity(cartCtx?.items?.length || 0);
  }, [cartCtx.items]);

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/Login");
  };

  return (
    <Fragment>
      <button onClick={props.onClick} className={classes.button}>
        <span>Cart</span>
        <span className={classes.badge}>{quantity}</span>
      </button>
      <button onClick={logoutHandler} className={classes.logoutButton}>
        {" "}
        Logout{" "}
      </button>
    </Fragment>
  );
};
export default HeaderCartButton;
