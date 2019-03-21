import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class CountDown extends Component {
  state = {
    deadline: "Aug, 30, 2019",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  };

  getCountDown(deadline) {
    //   get the deadline and todays date then subtract the current date from deadline date. if there is a negative number, the date of the event has alredy past
    const time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time);
    if (time < 0) {
      //   console.log("Sorry, Date has already Passed 😞");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }
  //   this will trigger the getCountDown function above👆🏾 on a loop after 1 second
  componentDidMount() {
    setInterval(() => this.getCountDown(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Events starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hrs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Secs</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}

export default CountDown;
