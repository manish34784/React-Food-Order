import Header from "./components/Header/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <div>
      <Header />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </div>
  );
}

export default App;
