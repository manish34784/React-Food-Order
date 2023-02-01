import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import AppContext from "./context/appContext";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    orderQuantity: 1,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    orderQuantity: 1,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    orderQuantity: 1,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    orderQuantity: 1,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [availableMeals, setAvailableMeals] = useState(DUMMY_MEALS);

  useEffect(() => {
    // console.log("cartItems: ", cartItems)
    // console.log("availableMeals: ", availableMeals)
  }, [cartItems]);


  const handleQuantityChange = (newVal, mealId) => {
    // console.log("Hello: ", newVal, mealId);
    const newData = availableMeals.map((meal) => {
      return { ...meal, orderQuantity: meal?.id === mealId ? newVal : meal?.orderQuantity }
    });
    setAvailableMeals(newData)
  }

  const handleAddToCart = (mealId) => {
    const reqArray = [...cartItems];

    const newItem = availableMeals.find((item) => (item.id === mealId))
    const reqIdx = cartItems.findIndex((item) => item.id === newItem.id);
    // console.log("reqIdx: ", reqIdx);
    if (reqIdx === -1) {
      reqArray.push(newItem)
    }
    else {
      reqArray[reqIdx] = newItem;
    }
    // console.log("reqArray: ", reqArray)
    setCartItems(reqArray);

  }

  const handleIncreaseFromWithinCart = (mealId, currentQuantity) => {
    // console.log("From Increase: ", mealId, currentQuantity);
    handleQuantityChange((+currentQuantity + 1), mealId);
    let newCartItems = cartItems.map((item) => {
      return {
        ...item, orderQuantity: item?.id === mealId ? (+currentQuantity + 1) : item?.orderQuantity
      }
    });
    setCartItems(newCartItems)
  }

  const handleDecreaseFromWithinCart = (mealId, currentQuantity) => {
    // console.log("From Decrease: ", mealId, currentQuantity)
    if(currentQuantity > 1) {
      handleQuantityChange((+currentQuantity - 1), mealId);
      let newCartItems = cartItems.map((item) => {
        return {
          ...item, orderQuantity: item?.id === mealId ? (+currentQuantity - 1) : item?.orderQuantity
        }
      });
      setCartItems(newCartItems)
    }
    else {
      let newCartItems = cartItems.filter((item) => (item?.id !== mealId));
      setCartItems(newCartItems);
    }
  }

  return (
    <AppContext.Provider
      value={{
        cartItems, availableMeals, handleAddToCart, handleQuantityChange,
        handleIncreaseFromWithinCart, handleDecreaseFromWithinCart
      }}
    >
      {
        showCart && <Cart closeCart={() => { setShowCart(false); }} />
      }
      <Header openCart={() => { setShowCart(true); }} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </AppContext.Provider>
  );
}

export default App;
