import {  useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIshown, setCatisshown] = useState(false);

  const showCartHandler = () => {
    setCatisshown(true);
  };
  const hideCartHandler = () => {
    setCatisshown(false);
  };
  
  return (
    <CartProvider>
      <Header onShowcart={showCartHandler} />
      {cartIshown && <Cart onHidecart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
