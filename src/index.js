import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Popup from 'reactjs-popup';
import { Container, Row, Col } from 'react-grid-system';

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

class PlanButton extends React.Component {
  render() {
    return(
      <div>
        <button>Create a meal plan</button>
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
      <nav>
        <h1>Plantry</h1>
        <Login />
      </nav>
    )
  }
}

class HomeNav extends React.Component {
  render() {
    return(
      <nav>
        <h1>Plantry</h1>
        <PlanButton />
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

class Calendar extends React.Component {
  render() {
    return(
      <div>
        <h2>Meal Plan</h2>
        <Container className="container">
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
          <Row align="center" style={{ height: '75px' }}>
            <Col>Breakfast</Col>
            <Col>Eggs and Toast</Col>
            <Col>Eggs and Toast</Col>
            <Col>Eggs and Toast</Col>
            <Col>Eggs and Toast</Col>
            <Col>Eggs and Toast</Col>
            <Col>Eggs and Toast</Col>
            <Col>Eggs and Toast</Col>
          </Row>
          <Row align="center" style={{ height: '75px' }}>
            <Col>Lunch</Col>
            <Col>Peanut butter sandwich</Col>
            <Col>Salad</Col>
            <Col>Turkey sandwich</Col>
            <Col>Salad</Col>
            <Col>Peanut butter sandwich</Col>
            <Col>Salad</Col>
            <Col>Turkey Sandwich</Col>
          </Row>
          <Row align="center" style={{ height: '75px' }}>
            <Col>Dinner</Col>
            <Col>Stir Fry</Col>
            <Col>Stir Fry</Col>
            <Col>El Barrio</Col>
            <Col>Tacos</Col>
            <Col>Tacos</Col>
            <Col>Spaghetti</Col>
            <Col>Spaghetti</Col>
          </Row>
          <Row align="center" style={{ height: '75px' }}>
            <Col>Snacks</Col>
            <Col>Tangerines, chips</Col>
            <Col>Pita chips and hummus</Col>
            <Col>Grapes and apples</Col>
            <Col>Fritos</Col>
            <Col>Crackers</Col>
            <Col>Cookies</Col>
            <Col>Tangerines</Col>
          </Row>
        </Container>
        <button>Edit</button>
      </div>
    )
  }
}

class ShoppingList extends React.Component {
  render() {
    return(
      <div>
        <h3>Shopping List</h3>
        <input type="checkbox" name="item1" value="item1" />Item 1
        <input type="checkbox" name="item2" value="item2" />Item 2
        <input type="checkbox" name="item3" value="item3" />Item 3
        <input type="checkbox" name="item4" value="item4" />Item 4
        <input type="checkbox" name="item5" value="item5" />Item 5
        <input type="checkbox" name="item6" value="item6" />Item 6
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
      <Router>
        <div className="app">
          <header>
            <Route exact path="/" component={TopNav} />
            <Route exact path="/home" component={HomeNav} />
          </header>
          <main>
            <Route exact path="/" component={Info} />
            <Route exact path="/home" component={Splash} />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
