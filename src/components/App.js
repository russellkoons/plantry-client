import React from 'react';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {connect} from 'react-redux';
import './App.css';
import {history} from '../store';
import {TopNav} from './topnav';
import Nav from './nav';
import {Info} from './info';
import {Splash} from './splash';
import MealPlan from './mealplan';
import PlanSelect from './planselect';
import {ShoppingList} from './shoppinglist';

class App extends React.Component {
  render() {
    if (this.props.authToken === null) {
      return(
        <div>
          <div className="app">
            <header>
              <TopNav />
            </header>
            <main>
              <Info />
            </main>
            <footer>
              <p>Created and coded by Russell Koons 2019</p>
            </footer>
          </div>
        </div> 
      )
    } else {
      return(
        <div>
          <ConnectedRouter history={history}>
            <div className="app">
              <header>
                <Nav />
              </header>
              <main>
                <Route exact path="/" component={Splash} />
                <Route exact path="/newplan" component={MealPlan} />
                <Route exact path="/plans" component={PlanSelect} />
                <Route exact path="/shoppinglist" component={ShoppingList} />
              </main>
              <footer>
                <p>Created and coded by Russell Koons 2019</p>
              </footer>
            </div>
          </ConnectedRouter>
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
});

export default connect(mapStateToProps)(App);