import React, { useContext } from 'react';
import { MyContext } from '../context/index';

const Play = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className='result_wrapper'>
        <h3>The looser is</h3>
        <div>{context.state.result}</div>
      </div>
      <button className='action_button' onClick={() => context.startOver()}>
        Start Over
      </button>
      <button
        className='action_button btn_2'
        onClick={() => context.getNewLooser()}
      >
        Get new looser
      </button>
    </>
  );
};

export default Play;
