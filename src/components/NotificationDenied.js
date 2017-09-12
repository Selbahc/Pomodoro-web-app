import React, { Component } from 'react';

class NotificationDenied extends Component {
  render() {
    return (
      <div className="columns notification-denied">
        {this.props.notification === 'denied' &&
          <mark className="column text-center">You denied notifications.<br/>Please allow them in your browser's preferences if you want to know when to take a break.</mark>
        }
        {this.props.notification === 'default' &&
          <mark className="column text-center">You will be asked for notifications.<br/>Please allow them if you want to know when to take a break.</mark>
        }
      </div>
    );
  }
}

export default NotificationDenied;
