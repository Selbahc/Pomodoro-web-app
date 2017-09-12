import React, {Component} from 'react';

class Setter extends Component {
  handleChange(hours, minutes, seconds) {
    const hh = document.querySelector('#hours').value;
    const mm = document.querySelector('#minutes').value;
    const ss = document.querySelector('#seconds').value;

    this.props.setNewTime(hh, mm, ss);
  }

  render() {
    return (
      <div>
        <div className="columns">
          <h2 className="column col-12 setter-header text-center">Customize your Working session duration :</h2>
        </div>
        <div>
          <div className="columns col-gapless form-group">
            <label htmlFor="hours" className="column col-2 col-ml-auto">Hours</label>
            <input id="hours" className="column col-1 form-input col-mr-auto" type="number"
              defaultValue={this.props.twoDigits(this.props.baseTime.hours())}
              min="0" max="23"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="columns col-gapless form-group">
            <label htmlFor="minutes" className="column col-2 col-ml-auto">Minutes</label>
            <input id="minutes" className="column col-1 form-input col-mr-auto" type="number"
              defaultValue={this.props.twoDigits(this.props.baseTime.minutes())}
              min="0" max="59"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="columns col-gapless form-group">
            <label htmlFor="seconds" className="column col-2 col-ml-auto">Seconds</label>
            <input id="seconds" className="column col-1 form-input col-mr-auto" type="number"
              defaultValue={this.props.twoDigits(this.props.baseTime.seconds())}
              min="0" max="59"
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default Setter;
