import React from 'react';
import {connect} from 'react-redux';
import {ShoppingList} from './shoppinglist';
import {Container} from './styledcomponents';
import '../index.css';

export class ListSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  handleChange = () => {
    const shoppinglist = []
    const e = document.getElementById("listselect");
    const val = e.value;
    const plan = this.props.plans[val];
    shoppinglist.push(
      <ShoppingList key="0" plan={plan} meals={this.props.meals} />
    )
    this.setState({
      list: shoppinglist
    })
  }

  render() {
    const list = [];
    for (let i = 0; i < this.props.plans.length; i++) {
      list.push(
        <option value={i} key={i + 1}>{this.props.plans[i].date}</option>
      )
    }

    return(
      <Container>
        <h2>Shopping List</h2>
        <select id="listselect" defaultValue="choose" onChange={this.handleChange}>
          <option value="choose" key="0" disabled>--Choose a plan--</option>
          {list}
        </select>
        {this.state.list}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  plans: state.plantry.plans,
  meals: state.plantry.meals
});

export default connect(mapStateToProps)(ListSelect);