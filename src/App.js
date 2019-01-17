import React, { Component } from 'react';
import './App.css';

import { CSSTransitionGroup } from 'react-transition-group'

class App extends Component {
  state = {
    timerType: "first"
  };

  handleCLick = () => {
    this.setState({
      timerType: "second"
    })
  }
  handleCLick2 = () => {
    this.setState({
      timerType: "third"
    })
  }
  handleCLick3 = () => {
    this.setState({
      timerType: "first"
    })
  }

  render() {
    const { timerType } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleCLick}>second</button>
        <button onClick={this.handleCLick2}>third</button>
        <button onClick={this.handleCLick3}>first</button>
        {/* <div className="PomodoroBackground" /> */}
          {timerType === "first"  ? (
            <div className="PomodoroBackground" />
          ) : (
              ""
            )}
            {timerType === "second"  ? (
            <div className="RestBackground" />
          ) : (
              ""
            )}
            {timerType === "third"  ? (
            <div className="RestBackground2" />
          ) : (
              ""
            )}
        <CSSTransitionGroup
          transitionName="gradientTransition"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={500}
          // in={timerType}
          // appear={true}
        >
         {timerType === "first"  ? (
            <div className="PomodoroBackground" />
          ) : (
              ""
            )}
          {timerType === "second"  ? (
            <div className="RestBackground" />
          ) : (
              ""
            )}
          {timerType === "third"  ? (
            <div className="RestBackground2" />
          ) : (
              ""
            )}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
