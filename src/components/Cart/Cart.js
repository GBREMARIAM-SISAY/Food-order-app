import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart() {
  const Cartitem = (
    <ul className={classes['cart-items']}>
      {[
        {
          id: "m1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((cart) => (
        <li>{cart.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {Cartitem}
      <div className={classes.total} >
        <span>Total Amount</span>
        <span>35.3</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}> close</button>
        <button className={classes.button}> Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
