import React, { useState } from 'react';

// const atbat = true;
// const atbatInitial = 'isAB';

// const homeAtBat = document.querySelector('.homescore');

// const awayAtBat = document.querySelector('.awayscore');
// const toggleBtn = document.querySelector('.atbat');

const Dashboard = props => {
  //   const [team, setTeam] = useState({});

  //   toggleBtn.addEventListener('click', () => {
  //     const toggle = document.querySelector('.toggleBtn');
  //   });

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

      <div>
        <button onClick={e => props.handleInning(e)}>At Bat</button>
      </div>
    </div>
  );
};

export default Dashboard;
