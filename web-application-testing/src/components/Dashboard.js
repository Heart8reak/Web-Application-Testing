import React from 'react';

const Dashboard = props => {
  console.log(props);
  return (
    <div className="btnContainer">
      <div className="btn">
        <button onClick={e => props.handleStrike(e)}>Strike</button>
        <button onClick={e => props.handleBall(e)}>Ball</button>
      </div>

      <div className="btn">
        <button onClick={e => props.handleHit(e)}>Hit</button>
        <button onClick={e => props.handleFoul(e)}>Foul</button>
      </div>
    </div>
  );
};

export default Dashboard;
