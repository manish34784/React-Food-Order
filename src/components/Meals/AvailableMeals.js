import React, { useState } from 'react'
import Card from '../Card/Card';
import './AvailableMeals.css';
import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    orderQuantity: 0,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    orderQuantity: 0,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    orderQuantity: 0,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    orderQuantity: 0,
  },
];

export default function AvailableMeals() {

  const [mealsList, setMealsList] = useState(DUMMY_MEALS);

  const handleQuantityChange = () => {

  }

  return (
    <section className={'meals'}>
      <Card>
        <ul>
          {
            DUMMY_MEALS?.map((meal) => (
              <MealItem
                key={meal.id}
                meal={meal}
                onChangeQuantity={handleQuantityChange}
              />
            ))
          }
        </ul>
      </Card>
    </section>
  )
}
