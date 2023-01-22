import { useState } from "react";
import CartContext from "./cart-context";


export const CartProvider = (props) => {
  if (!localStorage.getItem("email")) {
    localStorage.setItem("email", "");
  }
 

  const [items, setItems] = useState([]);

  const addItemToCartHandler=(item)=>{
    let hasItems=false
    const newArray=[...items]
    newArray.forEach(Element=>{ 
        if(Element.title===item.title){
            hasItems=true
        }
    })
    if(hasItems===true){
        alert('item exsists')
    }
    else{
        setItems([...items,item])
    }
    };

  const removeItemHandler = (id) => {
    let itemToRemove = items.findIndex((item) => item.id === id);
    console.log(itemToRemove);
    const i = [...items];
    const updatedItems = i.splice(itemToRemove, 1);
    console.log(itemToRemove, i, updatedItems);
    setItems(i);
  };

  const emptyCartHandler = () => {
    setItems([]);
  };

  const initializeCartHandler = (items) => {
    setItems(items);
  };

  const mapIDHandler = (id) => {
    items.id = id;
  };

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
    emptyCart: emptyCartHandler,
    initilizeCart: initializeCartHandler,
    mapID: mapIDHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
