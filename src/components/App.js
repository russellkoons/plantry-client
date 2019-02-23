import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {TopNav} from './topnav';
import {Nav} from './nav';
import {Info} from './info';
import {Splash} from './splash';
import {MealPlan} from './mealplan';
import {Calendar} from './calendar';
import {ShoppingList} from './shoppinglist';

class App extends React.Component {
  render() {

    return(
      <div>  
        <Router>
          <div className="app">
            <header>
              <Route exact path="/" component={TopNav} />
              <Route path="/(home|newplan|plans|shoppinglist)" component={Nav} />
            </header>
            <main>
              <Route exact path="/" component={Info} />
              <Route exact path="/home" component={Splash} />
              <Route exact path="/newplan" component={MealPlan} />
              <Route exact path="/plans" component={Calendar} />
              <Route exact path="/shoppinglist" component={ShoppingList} />
            </main>
            <footer>
              <p>Created and coded by Russell Koons 2019</p>
            </footer>
          </div>
        </Router>
      </div> 
    )
  }
}

export default App;
