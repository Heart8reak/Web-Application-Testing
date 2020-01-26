import React from 'react';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    strike: 0,
    ball: 0,
    hits: 0,
    outs: 0,
    inning: 1,
    onBase: 0,
    homeScore: 0,
    awayScore: 0,
    className: ''
  };

  handleStrike = e => {
    e.preventDefault();
    this.setState({ strike: this.state.strike + 1 });

    if (this.state.strike > 2) {
      this.setState({
        strike: 0,
        ball: 0,
        onBase: 0,
        outs: this.state.outs + 1
      });
    }

    if (this.state.outs === 3) {
      this.setState({
        outs: 0,
        inning: this.state.inning + 1
      });
    }

    if (this.state.outs === 3) {
      this.setState({
        outs: 0,
        inning: this.state.inning + 1
      });
      if (this.inning % 2 === 0) {
        document.querySelector('.homescore').classList.toggle('.atbat');
        document.querySelector('.awayscore').classList.toggle('atbat');
      } else {
        document.querySelector('.awayscore').classList.toggle('atbat');
        document.querySelector('.homescore').classList.toggle('atbat');
      }
    }
  };

  handleInning = () => {
    if (this.state.inning + 1) {
      this.setState({
        className: 'homescore'
      });
    } else {
      this.setState({
        className: 'atbat'
      });
    }
  };

  handleBall = () => {
    this.setState({
      ball: this.state.ball + 1
    });

    if (this.state.ball > 2) {
      this.setState({
        ball: 0,
        strike: 0,
        onBase: this.state.onBase + 1
      });
    }

    if (this.state.onBase === 4) {
      this.setState({
        homeScore: this.state.homeScore + 1,
        onBase: 3
      });
    }
  };

  handleHit = e => {
    e.preventDefault();
    this.setState({
      ball: 0,
      strike: 0,
      hits: this.state.hits + 1
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
        <Display
          strike={this.state.strike}
          ball={this.state.ball}
          hits={this.state.hits}
          outs={this.state.outs}
          inning={this.state.inning}
          onBase={this.state.onBase}
          homeScore={this.state.homeScore}
          awayScore={this.state.awayScore}
        />
        <Dashboard
          handleStrike={this.handleStrike}
          handleBall={this.handleBall}
          handleHit={this.handleHit}
          handleFoul={this.handleFoul}
          handleInning={this.handleInning}
        />
      </div>
    );
  }
}
export default App;
