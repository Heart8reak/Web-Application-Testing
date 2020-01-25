import React from 'react';

const Dashboard = props => {
  console.log(props);
  return (
    <div className="btnContainer">
      <button onClick={e => props.handleStrike(e)}>Strike</button>
      <button onClick={e => props.handleBall(e)}>Ball</button>

      <div>
        <button onClick={e => props.handleHit(e)}>Hit</button>
        <button onClick={e => props.handleFoul(e)}>Foul</button>
      </div>
    </div>
  );
};

export default Dashboard;
