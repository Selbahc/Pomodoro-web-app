import React, {Component} from 'react';

class StartButton extends Component {
  handleStartClick() {
    this.props.startCountDown();
  }

  handlePauseClick() {
    this.props.suspendCountDown();
  }

  render() {
    return (
      <div className="columns">
        <div className="column text-center">
          {!this.props.isRunning &&
            <button id='startBtn' className="btn btn-lg btn-primary btn-block" onClick={this.handleStartClick.bind(this)}>START</button>}
          {this.props.isRunning &&
            <button id='pauseBtn' className="btn btn-lg" onClick={this.handlePauseClick.bind(this)}>PAUSE</button>}
        </div>
      </div>
    );
  }

}

export default StartButton;
