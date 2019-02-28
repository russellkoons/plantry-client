import React from 'react';
import {connect} from 'react-redux';
import Calendar from './calendar';

class PlanSelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cal: []
    }
  }

  handleChange = () => {
    const calendar = []
    const e = document.getElementById("planselect");
    const val = e.value;
    const plan = this.props.plans[val];
    calendar.push(
      <Calendar key="0" plan={plan.id} history={this.props.history} />
    )
    this.setState({
      cal: calendar
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
        <h2>Meal Plan</h2>
        <select id="planselect" defaultValue="choose" onChange={this.handleChange}>
          <option value="choose" key="0" disabled>--Choose a plan--</option>
          {list}
        </select>
        {this.state.cal}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  plans: state.plantry.plans
});

export default connect(mapStateToProps)(PlanSelect);