import React, { useContext, useState } from 'react'
import AppContext from '../../context/appContext';
import Card from '../Card/Card';
import './AvailableMeals.css';
import MealItem from './MealItem';

export default function AvailableMeals() {
  const { availableMeals } = useContext(AppContext);
  // console.log("availableMeals: ", availableMeals)

  return (
    <section className={'meals'}>
      <Card>
        <ul>
          {
            availableMeals?.map((meal) => (
              <MealItem
                key={meal.id}
                meal={meal}
              />
            ))
          }
        </ul>
      </Card>
    </section>
  )
}
