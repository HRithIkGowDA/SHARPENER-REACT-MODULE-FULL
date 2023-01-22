import React, { useContext, useEffect } from "react";
import ProductItems from "./ProductItem/ProductItems";
import classes from "./AvailableItems.module.css";
import axios from "axios";
import CartContext from "../../Store/cart-context";


const AvailableItems = (props) => {
  const cartCtx = useContext(CartContext);

  const productsArr = [
    {
      id: "1",
  
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  
    {
      id: "2",
  
      title: "Black and white Colors",
  
      price: 50,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
  
    {
      id: "3",
  
      title: "Yellow and Black Colors",
  
      price: 70,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
  
    {
      id: "4",
  
      title: "Blue Color",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  let emailId = localStorage.getItem("email").replace(".", "").replace("@", "");
  

  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/b6bd1f08150c4afeba4ab87587812ef2/cart${emailId}`
      )
      .then((res) => {
        cartCtx.initilizeCart(res.data);
      });
  }, []);
  
  return (
    <div className={classes.content}>
     
      <ul className={classes.ul}>
        {productsArr.map((item) => {
          return (
            <ProductItems
            key={Math.random()}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.imageUrl}
            quantity={1}
            _id={item._id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AvailableItems;
