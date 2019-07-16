import React from 'react';
import styled from 'styled-components';
import {Error} from './styledcomponents'
import '../index.css'

// ShoppingList Component

const Item = styled.div`
  color: #E85A4F;
  font-size: 20px;
  width: 150px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;

export class ShoppingList extends React.Component {
  render() {
    const mealnames = [];
    const meallist = [];
    const list = [];
    const formatted = [];
    let errors = false;
    const error = [];
    
    const meals = this.props.meals;
    const mealplan = this.props.plan.mealplans;
    
    // Push the different meal names into an array
    for (let i = 0; i < mealplan.length; i++) {
      mealnames.push(mealplan[i].meal);
    }

    // Finds the meals from the meal database and adds them all to an array
    for (let i = 0; i < mealnames.length; i++) {
      if (mealnames[i] === 'Eating out') {
        continue;
      } else {
        let meal = meals.find(e => e.meal === mealnames[i]);
        if (meal === undefined) {
          errors = true;
        } else {
          meallist.push(meal);
        }
      }
    }

    // Remove duplicates
    const short = [...new Set(meallist)];
    
    if (errors) {
      error.push(
        <Error>If you changed the name of one of your meals make sure you update your plan to reflect that change!</Error>
      )
    }

    // Creates a list of ingredients
    for (let i = 0; i < short.length; i++) {
      for(let j = 0; j < short[i].ingredients.length; j++) {
        const ingredient = short[i].ingredients[j].ingredient;
        list.push(ingredient);
      }
    }

    // Remove duplicate ingredients
    const ingredients = [...new Set(list)];

    for (let i = 0; i < ingredients.length; i++) {
      formatted.push(
        <Item id={`item${i}`} key={i}>
          <input type="checkbox" /><span>{ingredients[i]}</span>
        </Item>
      )
    }

    return(
      <div>
        {error}
        {formatted}
      </div>
    )
  }
}
