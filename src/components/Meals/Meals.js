import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./Mealssummery";

function Meals() {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals;
