import React from 'react';

const Display = props => {
  console.log(props);
  return (
    <div className="display-top">
      <div className="score">
        <h1>Home: {props.homeScore}</h1>
      </div>

      <h3>Strike: {props.strike}</h3>
      <h3>Balls: {props.ball}</h3>

      <div className="score">
        <h1>Away: {props.awayScore}</h1>
      </div>

      <div className="display-bottom">
        <h2>
          Hits: <br />
          {props.hits}
        </h2>
        <h2>
          Outs: <br />
          {props.outs}
        </h2>
        <h2>
          On Base: <br />
          {props.onBase}
        </h2>
        <h2>
          Inning: <br />
          {props.inning}
        </h2>
      </div>
    </div>
  );
};

export default Display;
