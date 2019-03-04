import React from 'react';
import styled from 'styled-components';
import background from '../images/veggies2.jpg';
import {Container} from './styledcomponents';

const LandingSection = styled.section`
  min-height: 200px;
  max-width: 400px;
  padding: 40px 20px;  
  margin: auto;
  @media screen and (min-width: 800px) {
    margin: 0 15px;
  }
`;

const StepSection = LandingSection.withComponent('li');

const StepsContainer = styled.section`
  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 90%, #EAE7DC 100%), linear-gradient(to bottom, rgba(0,0,0,0.85) 0%,rgba(0,0,0,.25) 100%), url(${background});
  background-size: cover;
  background-position: center center;
`;

const StepsList = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1200px;
  margin: auto;
  padding: 0;
  counter-reset: counter;
  list-style: none;
  li {
    counter-increment: counter;
    position: relative;
  }
  li:nth-child(1) {
    color: rgba(39,106,115,0.5);
  }
  li:nth-child(2) {
    color: rgba(252, 74, 26, 0.5);
  }
  li:nth-child(3) {
    color: rgba(247, 183, 51, 0.5);
  }
  li::before {
    content: counter(counter);
    font-size: 12em;
    font-weight: bold;
    position: absolute;
    left: 13%;
    top: 0px;
    text-align: center;
    z-index: 0;
  }
  h2, p {
    position: relative;
    color: #DEDCE3;
  }
  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(7, 75px);
    li::before {
      top: -93px;
    }
    h1 {
      grid-column: 1 / 4;
    }
    .step-1 {
      grid-column: 1;
      grid-row: 2 / 5;
    }
    .step-2 {
      grid-column: 2;
      grid-row: 3 / 6;
    }
    .step-3 {
      grid-column: 3;
      grid-row: 4 / 7
    }
  }
`;

export class Splash extends React.Component {
  render() {
    return(
      <Container>
        <StepsContainer>
          <StepsList>
            <StepSection className="step-1">
              <div>
                <h2>Plan your meals</h2>
                <p>Click New Plan and then Add New Meal to save all your favorite homemade meals and use them to build your weekly meal plan.</p>
              </div>
            </StepSection>
            <StepSection className="step-2">
              <div>
                <h2>View your calendar</h2>
                <p>Go to Plans in the menu and select your latest plan to keep track of what you're eating and when. Click on a meal to view or edit!</p>
              </div>
            </StepSection>
            <StepSection className="step-3">
              <div>
                <h2>Easy Shopping Lists</h2>
                <p>Select your desired plan from the Shopping List page and you'll automatically get a list of all the ingredients you need for the week.</p>
              </div>
            </StepSection>
          </StepsList>
        </StepsContainer>
      </Container>
    )
  }
}