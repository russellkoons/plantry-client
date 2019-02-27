import React from 'react';
import {connect} from 'react-redux';

class RecipeCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }
  
  editMeal = () => {
    this.setState({editing: true})
  }

  render() {
    let meal = this.props.meals.find(e => e.meal === this.props.meal);
    let ingredients = [];
    for(let i = 0; i < meal.ingredients.length; i++) {
      ingredients.push(
        <li key={i}>{meal.ingredients[i].ingredient}</li>
      )
    }

    if (!this.state.editing) {
      return(
        <div>
          <h3>{meal.meal}</h3>
          <a href={meal.url}>{meal.url}</a>
          <h4>Ingredients</h4>
          <ul>
            {ingredients}
          </ul>
          <p>Notes: {meal.notes}</p><br />
          <button onClick={this.editMeal}>Edit</button>
        </div>
      )
    } else {
      return(
        <p>Hi there...</p>
      )
    }
  }
}

const mapStateToProps = state => ({
  meals: state.plantry.meals
});

export default connect(mapStateToProps)(RecipeCard);