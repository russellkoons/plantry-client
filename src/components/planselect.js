import React from 'react';
import {connect} from 'react-redux';
import {deletePlan} from '../actions/protected';
import Calendar from './calendar';
import {Container} from './styledcomponents';
import '../index.css';

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
      <Calendar key="0" plan={plan.id} history={this.props.history} onDelete={this.delete} />
    )
    this.setState({
      cal: calendar
    })
  }

  delete = () => {
    const id = this.props.plan.id;
    this.props.deletePlan(id)
      .then(() => {
        this.setState({
          cal: []
        })
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
        <h2>Meal Plan</h2>
        <select id="planselect" defaultValue="choose" onChange={this.handleChange}>
          <option value="choose" key="0" disabled>--Choose a plan--</option>
          {list}
        </select>
        {this.state.cal}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  plans: state.plantry.plans
});

export default connect(mapStateToProps, { deletePlan })(PlanSelect);