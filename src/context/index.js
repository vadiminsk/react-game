import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: '',
  };

  addPlayerHandler = (name) => {
    this.setState((prevState) => ({
      players: [...prevState.players, name],
    }));
  };

  removePlayerHandler = (idx) => {
    let newArray = this.state.players;
    newArray.splice(idx, 1);

    this.setState({
      players: newArray,
    });
  };

  nextHandler = () => {
    const { players } = this.state;

    if (players.length < 2) {
      toast.error('You need more than one player', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 1500,
      });
    } else {
      console.log('Move forward to Play stage');
    }
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayerHandler,
            removePlayer: this.removePlayerHandler,
            next: this.nextHandler,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
        <ToastContainer />
      </>
    );
  }
}

export { MyContext, MyProvider };
