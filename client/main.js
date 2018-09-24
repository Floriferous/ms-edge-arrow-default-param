import './main.html';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';

class App extends Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      this.checkState();
    });
  };

  checkState = (stuff = true) => {
    const { counter } = this.state;
    console.log('stuff', stuff);
    console.log('counter', counter);
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <button onClick={this.handleClick}>Click me {counter}</button>
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('react'));
});
