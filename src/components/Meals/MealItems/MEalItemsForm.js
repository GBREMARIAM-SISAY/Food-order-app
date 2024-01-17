import Input from "../../UI/Input";
import classes from "./MealItemsForm.module.css";

function MealItemsForm() {
  return (
    <form className={classes.form}>
      <Input
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
    </form>
  );
}

export default MealItemsForm;
