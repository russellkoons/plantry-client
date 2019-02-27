import React from 'react';

export class ShoppingList extends React.Component {
  render() {
    const mealnames = [];
    const meallist = [];
    const list = [];
    const formatted = [];
    
    const meals = this.props.meals;
    const mealplan = this.props.plan.mealplans;

    for (let i = 0; i < mealplan.length; i++) {
      mealnames.push(mealplan[i].meal);
    }

    for (let i = 0; i < mealnames.length; i++) {
      let meal = meals.find(e => e.meal === mealnames[i])
      meallist.push(meal)
    }

    const short = [...new Set(meallist)];

    for (let i = 0; i < short.length; i++) {
      for(let j = 0; j < short[i].ingredients.length; j++) {
        const ingredient = short[i].ingredients[j].ingredient;
        list.push(ingredient);
      }
    }

    const ingredients = [...new Set(list)];

    for (let i = 0; i < ingredients.length; i++) {
      formatted.push(
        <div key={i}>
          <input type="checkbox" /><span>{ingredients[i]}</span>
        </div>
      )
    }

    return(
      <div>
        {formatted}
      </div>
    )
  }
}