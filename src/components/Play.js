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
      <button className='action_button'>Start Ober</button>
      <button className='action_button btn_2'>Get new looser</button>
    </>
  );
};

export default Play;
