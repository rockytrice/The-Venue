import React, { Component } from "react";

class CountDown extends Component {
  state = {};
  render() {
    return (
      <div className="countdown_wrapper">
        <div className="countdown_top">Events starts in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">45</div>
            <div className="countdown_tag">days</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">2</div>
            <div className="countdown_tag">Hrs</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">20</div>
            <div className="countdown_tag">Min</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">40</div>
            <div className="countdown_tag">Secs</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
