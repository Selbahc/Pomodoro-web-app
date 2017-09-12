import React, {Component} from 'react';

class Display extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column text-center">
          <h2 className="display">{`${this.props.twoDigits(this.props.currentTime.hours())}h
            ${this.props.twoDigits(this.props.currentTime.minutes())}m
            ${this.props.twoDigits(this.props.currentTime.seconds())}s`}
          </h2>
        </div>
      </div>
    );
  }

}

export default Display;
