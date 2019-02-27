import React from 'react';
import {connect} from 'react-redux';
import {ShoppingList} from './shoppinglist';

class ListSelect extends React.Component {
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
        <option value={i} key={i + 1}>Plan #{i + 1}</option>
      )
    }

    return(
      <div>
        <h2>Shopping List</h2>
        <select id="listselect" defaultValue="choose" onChange={this.handleChange}>
          <option value="choose" key="0" disabled>--Choose a plan--</option>
          {list}
        </select>
        {this.state.list}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  plans: state.plantry.plans,
  meals: state.plantry.meals
});

export default connect(mapStateToProps)(ListSelect);