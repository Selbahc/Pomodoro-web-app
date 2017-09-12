import 'spectre.css';
import moment from 'moment';

import React, {Component} from 'react';
import Header from './components/Header';
import Display from './components/Display';
import StartButton from './components/StartButton';
import Setter from './components/Setter';
import NotificationDenied from './components/NotificationDenied';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: moment().set({hours: 0, minutes: 25, seconds: 0}),
      baseTime: moment().set({hours: 0, minutes: 25, seconds: 0}),
      isRunning: false,
      intervalID: null,
      notification: Notification.permission,
      workingCycles: 0
    };
  }

  setNewTime(hours, minutes, seconds) {
    this.setState({
      currentTime: moment().set({hours, minutes, seconds}),
      baseTime: moment().set({hours, minutes, seconds})
    });
  }

  twoDigits(digit) {
    return digit < 10
      ? `0${digit}`
      : digit;
  }

  workCountDown() {
    this.setState({
      currentTime: this.state.currentTime.subtract(1, 'second')
    });
    if (this.state.currentTime.hours() === 0
      && this.state.currentTime.minutes() === 0
      && this.state.currentTime.seconds() < 1) {
        this.endCountDown();
    }
  }

  startCountDown(){
    this.setState({isRunning: true});
    this.workCountDown();
    const intervalID = setInterval(this.workCountDown.bind(this), 1000);
    this.setState({intervalID});
    Notification.requestPermission((result) => {
      this.setState({notification: result});
    });
  }

  suspendCountDown() {
    clearInterval(this.state.intervalID);
    this.setState({intervalID: null});
    this.setState({isRunning: false});
  }

  endCountDown() {
    this.suspendCountDown();
    this.setState((prevState) => {
      return {
        workingCycles: prevState.workingCycles + 1,
        currentTime: this.state.baseTime
      }
    });
    if (this.state.workingCycles === 4) {
      this.fireNotification('long');
      this.setState({
        workingCycles: 0
      });
    } else {
      this.fireNotification();
    }
  }

  fireNotification(duration) {
    if (duration) {
      const notification = new Notification('CHILL', {
        body: 'Enjoy a 15min break !',
        requireInteraction: true});
      return notification;

    } else {
      const notification = new Notification('RELAX', {
        body: 'Just have a 5min break !',
        requireInteraction: true});
      return notification;
    }
  }



  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <Display twoDigits={this.twoDigits}
            currentTime={this.state.currentTime}/>
          {/* if notification permission is denied or default, show message: */}
          {this.state.notification !== 'granted' &&
            <NotificationDenied notification={this.state.notification}/>
          }
          <StartButton isRunning={this.state.isRunning}
            startCountDown={this.startCountDown.bind(this)}
            suspendCountDown={this.suspendCountDown.bind(this)}
          />
          {/* if CountDown is working, hide Setter: */}
          {!this.state.isRunning &&
            <Setter
              setNewTime={this.setNewTime.bind(this)}
              twoDigits={this.twoDigits}
              currentTime={this.state.currentTime}
              baseTime={this.state.baseTime}
            />}
        </div>
      </div>
    );
  }
}

export default App;
