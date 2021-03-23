import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Play from './components/Play';
import Start from './components/Start';
import { MyContext } from './context';

class App extends React.Component {
  static contextType = MyContext;

  render() {
    return (
      <div className='wrapper'>
        <div className='center-wrapper'>
          <h1>Who pays the bill?</h1>
          {this.context.state.stage === 1 ? <Start /> : <Play />}
        </div>
      </div>
    );
  }
}

export default App;
