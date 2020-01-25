import React from 'react';

const Display = props => {
  console.log(props);
  return (
    <div className="btnContainer">
      <h1>Strike {props.strike}</h1>
      <h1>Balls {props.ball}</h1>
    </div>
  );
};

export default Display;
