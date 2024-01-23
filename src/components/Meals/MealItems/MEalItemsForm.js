import React, { useRef,useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemsForm.module.css";

function MealItemsForm(props) {
  const amountInputref = useRef();
  const[amountIsValid,setAmountIsValid]=useState(true)

  const submitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = amountInputref.current.value;
    const enterdAmountNumber = +enterdAmount;
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNumber < 1 ||
      enterdAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }
    props.onAddToCart(enterdAmountNumber)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputref}
        leable="amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>enter the right amount </p>}
    </form>
  );
}

export default MealItemsForm;
