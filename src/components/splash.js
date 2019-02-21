import React from 'react';

export class Splash extends React.Component {
  render() {
    return(
      <section>
        <h2>Welcome to Plantry!</h2>
        <p>Here's a quick rundown on how this whole thing works</p>
        <ol>
          <li>Click "Make a new meal plan!" in the menu</li>
          <li>Use the dropdown in each section to create new meals that you know and love</li>
          <li>Fill out your week with the meals you've created and submit your plan</li>
          <li>Once your meal plan is submitted click "Plans" in the menu to see your most recent meal plan</li>
          <li>Clicking the names of the meals will pull up all the info about the meal in case you forget</li>
          <li>When you're ready to go to the store click on "Shopping List" and you'll get a list of all the ingredients needed for your most recent plan!</li>
        </ol>
      </section>
    )
  }
}