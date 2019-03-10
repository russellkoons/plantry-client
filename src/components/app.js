import React from 'react';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {connect} from 'react-redux';
import {history} from '../store';
import TopNav from './topnav';
import SecondNav from './secondnav';
import {Info} from './info';
import {Splash} from './splash';
import MealPlan from './mealplan';
import PlanSelect from './planselect';
import ListSelect from './listselect';
import {StyledFooter} from './styledcomponents';

export class App extends React.Component {
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
            <StyledFooter>
              <p>Created and coded by Russell Koons &copy;2019</p>
            </StyledFooter>
          </div>
        </div> 
      )
    } else {
      return(
        <div>
          <ConnectedRouter history={history}>
            <div className="app">
              <header>
                <SecondNav />
              </header>
              <main>
                <Route exact path="/" component={Splash} />
                <Route exact path="/newplan" component={MealPlan} />
                <Route exact path="/plans" component={PlanSelect} />
                <Route exact path="/shoppinglist" component={ListSelect} />
              </main>
              <StyledFooter>
                <p>Created and coded by Russell Koons &copy;2019</p>
              </StyledFooter>
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
