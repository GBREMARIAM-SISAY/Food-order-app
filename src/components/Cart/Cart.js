import React, { useContext } from "react";
import CartItem from "./CartItem";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import cartContext from "../../store/cart-context";

function Cart(props) {
  const cartCtx = useContext(cartContext);

  const TotalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const CartItemAddHandler = (item) => {};

  const CartItemRemoveHandler = (id) => {};

  const Cartitem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cart) => (
        <CartItem
          name={cart.name}
          price={cart.price}
          amount={cart.amount}
          onAdd={CartItemAddHandler.bind(null, cart)}
          onRemove={CartItemRemoveHandler.bind(null, cart.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHidecart}>
      {Cartitem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{TotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHidecart} className={classes["button--alt"]}>
          close
        </button>
        {hasItems && <button className={classes.button}> Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
