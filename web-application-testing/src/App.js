import React from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    strike: 0,
    ball: 0
  };

  // strikePlus = currentStrike => {
  //   return currentStrike + 1;
  // };

  handleStrike = e => {
    e.preventDefault();
    this.setState({ strike: this.state.strike + 1 });

    if (this.state.strike > 1) {
      this.setState({
        strike: 0
      });
    }
  };

  handleBall = e => {
    e.preventDefault();
    this.setState({
      ball: this.state.ball + 1
    });

    if (this.state.ball > 2) {
      this.setState({
        ball: 0
      });
    }
  };

  handleHit = e => {
    e.preventDefault();
    this.setState({
      strike: 0,
      ball: 0
    });
  };

  handleFoul = e => {
    e.preventDefault();
    if (this.state.strike < 2) {
      this.setState({
        strike: this.state.strike + 1
      });
    }

    if (this.state.strike === 2) {
      this.setState({
        strike: 2
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Display strike={this.state.strike} ball={this.state.ball} />
        <Dashboard
          handleStrike={this.handleStrike}
          handleBall={this.handleBall}
          handleHit={this.handleHit}
          handleFoul={this.handleFoul}
        />
      </div>
    );
  }
}

export default App;
