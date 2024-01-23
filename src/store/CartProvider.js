import React, { useReducer } from "react";

import cartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const UpdateItems = state.items.concat(action.item);
    const updatedtotalamount =
      state.totalAmount + action.item.price * action.item.amount;
      return {
        items:UpdateItems,
        totalAmount:updatedtotalamount
      }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction();
  };

  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <cartContext.Provider value={CartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
