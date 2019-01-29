import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Popup from 'reactjs-popup';
import { Container, Row, Col } from 'react-grid-system';
import { slide as Menu } from 'react-burger-menu';
import $ from 'jquery';

// Things I need to do:
  // Make the calendar not look like crap!
  // Figure out how I'm going to make the meal plan forms look and implement the ingredient list stuff
  // REACT FORMS!!! AHHHHHH Formik: https://jaredpalmer.com/formik/
  // Make everything look real purty
  // Put my components into seperate files lol
  // How will I do weeks? Should I just have the user set the week when they're making their meal plan? Seems like the easiest solution...
  // Meal cards! Should include a list of ingredients plus any other info included in the notes
  // Have fun! YOU CAN DO THIS!!! YOU'RE DOING GREAT!!!!!!

const DAYS = [
  {name: 'Sunday', initial: 's'},
  {name: 'Monday', initial: 'm'},
  {name: 'Tuesday', initial: 't'},
  {name: 'Wednesday', initial: 'w'},
  {name: 'Thursday', initial: 'r'},
  {name: 'Friday', initial: 'f'},
  {name: 'Saturday', initial: 'a'}
];

const MEALS = [
  {name: 'Egg Bagel', ingredients: ['Eggs', 'Everything bagel', 'Cream cheese', 'Green Onion', 'Hot Sauce'], type: 'breakfast', notes: 'Delicious'},
  {name: 'Peanut Butter Sandwich', ingredients: ['Bread', 'Peanut butter', 'Hot honey'], type: 'lunch', notes: 'The standard'},
  {name: 'Eggs and toast', ingredients: ['Eggs', 'Bread', 'Hot Sauce'], type: 'breakfast', notes: 'A personal fave'},
  {name: 'Salad', ingredients: ['Greens', 'Tomato', 'Red onion', 'Eggs', 'Dressing'], type: 'lunch', notes: 'Healthy!'},
  {name: 'Spaghetti', ingredients: ['Spaghetti', 'Marinara', 'Parmesan', 'Garlic Bread'], type: 'dinner', notes: 'Too easy'},
  {name: 'Stir Fry', ingredients: ['Chicken', 'Mushrooms', 'Onion', 'Hoisin Sauce', 'Garlic'], type: 'dinner', notes: 'The new hotness'}
];

const PLAN = {
  breakfast: ['Breakfast', 'Egg Bagel', 'Eggs and Toast', 'Egg Bagel', 'Eggs and Toast', 'Egg Bagel', 'Eggs and Toast', 'Egg Bagel'],
  lunch: ['Lunch', 'Peanut Butter Sandwich', 'Salad', 'Peanut Butter Sandwich', 'Salad', 'Peanut Butter Sandwich', 'Salad', 'Peanut Butter Sandwich'],
  dinner: ['Dinner', 'Stir Fry', 'Spaghetti', 'Stir Fry', 'Spaghetti', 'Stir Fry', 'Spaghetti', 'Stir Fry']
};

class MealForm extends React.Component {
  render() {
    return(
      <div>
        <h2>New Meal</h2>
        <label htmlFor="name">Name: </label>
        <input type="text" /><br/>
        <fieldset>
          <legend>Ingredients</legend>
          <input type="text" /><br/>
          <button>Add Ingredient</button>
          <button>Remove Ingredient</button>
        </fieldset>
        <button onClick={e => e.preventDefault()}>Submit Meal</button>
      </div>
    )
  }
}

class ShoppingList extends React.Component {
  render() {
    const list = [];
    const formatted = [];

    for (let i = 0; i < MEALS.length; i++) {
      for(let j = 0; j < MEALS[i].ingredients.length; j++) {
        const ingredient = MEALS[i].ingredients[j];
        if (!(ingredient in list)) {
          list.push(ingredient)
        }
      }
    }

    const short = [...new Set(list)]

    for (let i = 0; i < short.length; i++) {
      formatted.push(
        <div key={i}>
          <input type="checkbox" /><span>{short[i]}</span>
        </div>
      )
    }

    return(
      <div>
        <h2>Shopping List</h2>
        {formatted}
      </div>
    )
  }
}

class MealPlan extends React.Component {
  render() {
    return(
      <div>
        <h2>New Meal Plan</h2>
        <form>
          <input type="date" name="date" /><br/>
          <DayCard day={DAYS[0]} />
          <DayCard day={DAYS[1]} />
          <DayCard day={DAYS[2]} />
          <DayCard day={DAYS[3]} />
          <DayCard day={DAYS[4]} />
          <DayCard day={DAYS[5]} />
          <DayCard day={DAYS[6]} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

class MealInput extends React.Component {
  render() {
    return(
      <option value={this.props.meal.name}>{this.props.meal.name}</option>
    )
  }
}

class DayCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      open: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal (id) {
    if ($(`#${id}`).val() === 'new') {
      this.setState({ open: true })
    }
  }

  closeModal () {
    this.setState({ open: false })
  }

  render() {
    const breakfast = [];
    const lunch = [];
    const dinner = [];
    for (let i = 0; i < MEALS.length; i++) {
      if (MEALS[i].type === 'breakfast') {
        breakfast.push(
          <MealInput meal={MEALS[i]} key={i} />
        )
      } else if (MEALS[i].type === 'lunch') {
        lunch.push(
          <MealInput meal={MEALS[i]} key={i} />
        )
      } else if (MEALS[i].type === 'dinner') {
        dinner.push(
          <MealInput meal={MEALS[i]} key={i} />
        )
      }
    }

    const initial = this.props.day.initial
    let initials = [initial + 'b', initial + 'l', initial + 'd']

    return(
      <fieldset>
        <legend>{this.props.day.name}</legend>
        <label htmlFor="breakfast">Breakfast: </label>
        <select id={initials[0]} defaultValue="choose" onChange={() => this.openModal(initials[0])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {breakfast}
        </select>
        <label htmlFor="lunch"> Lunch: </label>
        <select id={initials[1]} defaultValue="choose" onChange={() => this.openModal(initials[1])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {lunch}
        </select>
        <label htmlFor="dinner"> Dinner: </label>
        <select id={initials[2]} defaultValue="choose" onChange={() => this.openModal(initials[2])}>
          <option disabled value="choose">--Choose a meal--</option>
          <option value="new">New Meal</option>
          {dinner}
        </select>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <button className="close" onClick={this.closeModal}>
              &times;
            </button>
            <MealForm />
          </div>
        </Popup>
      </fieldset>
    )
  }
}

class Login extends React.Component {
  render() {
    return(
      <div>
        <Popup trigger={<button>Login</button>} modal>
        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <h2>Login</h2>
            <form id="login">
              <label htmlFor="loginusername">Username </label>
              <input type="text" name="loginusername" /><br />
              <label htmlFor="loginpassword">Password </label>
              <input type="text" name="loginpassword" /><br />
            </form>
            <Link to="/home">
              <button onClick={close}>Submit</button>
            </Link>
          </div>
        )}
        </Popup>
        <Popup trigger={<button>Sign Up</button>} modal>
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <h2>Sign Up</h2>
              <form id="signup">
                <label htmlFor="signupusername">Username </label>
                <input type="text" name="signupusername" /><br/>
                <label htmlFor="signuppassword">Password </label>
                <input type="text" name="signuppassword" /><br/>
                <label htmlFor="passconfirm">Confirm your Password </label>
                <input type="text" name="passconfirm" /><br/>
              </form>
              <Link to="/home">
                <button onClick={close}>Submit</button>
              </Link>
              <button>Login as Guest</button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

class Info extends React.Component {
  render() {
    return(
      <section>
        <p>Are you trying to eat out less? Trying to get healthy and save money at the same time? Then Plantry is the site for you!</p>
        <p>Plan out your entire week with the meals you find online or already know by heart and Plantry will automatically create a shopping list</p>
        <p>The rest is up to you!</p>
      </section>
    )
  }
}

class TopNav extends React.Component {
  render() {
    return(
      <nav id="topnav">
        <h1>Plantry</h1>
        <Login />
      </nav>
    )
  }
}

class Splash extends React.Component {
  render() {
    return(
      <section>
        <h2>Welcome to Plantry</h2>
        <p>Here's a quick rundown on how this whole thing works</p>
        <ol>
          <li>Click "Create a meal plan" to plan your meals for the week</li>
          <li>Create and save meals with the ingredients needed to make it</li>
          <li>Once your week is planned, click "Create a shopping list" to get a list of all the ingredients needed for the week!</li>
        </ol>
      </section>
    )
  }
}

class MealRow extends React.Component {
  render() {
    const meals = [];

    for (let i = 0; i < this.props.plan.length; i++) {
      meals.push(
        <Col key={i}>{this.props.plan[i]}</Col>
      );
    }

    return(
        <Row align="center" style={{ height: '75px' }}>
          {meals}
        </Row>
    )
  }
}

class CalendarRow extends React.Component {
  render() {
    return (
      <Row align="center" style={{ height: '50px' }}>
        <Col>Meals</Col>
        <Col>Sunday</Col>
        <Col>Monday</Col>
        <Col>Tuesday</Col>
        <Col>Wednesday</Col>
        <Col>Thursday</Col>
        <Col>Friday</Col>
        <Col>Saturday</Col>
      </Row>
    )
  }
}

class Calendar extends React.Component {
  render() {
    return(
      <div>
        <h2>Meal Plan</h2>
        <Container className="container">
          <CalendarRow />
          <MealRow plan={PLAN.breakfast} />
          <MealRow plan={PLAN.lunch} />
          <MealRow plan={PLAN.dinner}/>
        </Container>
        <button>Edit</button>
      </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div>
        <p>Created and coded by Russell Koons 2019</p>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return(
      <div>  
        <Router>
          <div className="app">
            <header>
              <TopNav />
            </header>
              <Menu left>
                <a id="newplan" href="/newplan">Make a new meal plan!</a>
                <a id="plans" href="/plans">Plans</a>
                <a id="shoppinglist" href="/shoppinglist">Shopping List</a>
              </Menu>
            <main>
              <Route exact path="/" component={Info} />
              <Route exact path="/home" component={Splash} />
              <Route exact path="/newplan" component={MealPlan} />
              <Route exact path="/plans" component={Calendar} />
              <Route exact path="/shoppinglist" component={ShoppingList} />
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </Router>
      </div> 
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
