import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cartSize } = useContext(StoreContext);

  return <div>Cart {cartSize}</div>;
};

export default Cart;
