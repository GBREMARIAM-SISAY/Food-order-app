import { Fragment } from "react";

import classes from './Heade.module.css';
import mealImage from '../../Assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="table full of deliceous food" />
      </div>
    </Fragment>
  );
}

export default Header;
