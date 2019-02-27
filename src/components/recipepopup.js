import React from 'react';
import { Col } from 'react-grid-system';
import Popup from 'reactjs-popup';
import RecipeCard from './recipecard';

export class RecipePopup extends React.Component {
  render() {
    return(
      <Col key={this.props.k}>
        <Popup trigger={<span>{this.props.meal}</span>} modal>
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <RecipeCard meal={this.props.meal} />
            </div>
          )}
        </Popup>
      </Col>
    )
  }
}