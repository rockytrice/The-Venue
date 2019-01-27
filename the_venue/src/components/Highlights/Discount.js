import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };
  // this function is going to check if the discount start is going to equal the discountEnd. Then we are going to updating discountStart👌🏾. this is what will be rendered in the discount percentage
  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };
  // to acheive the discoundEnd to reach 30, we use the componentDidUpdate and run the percentage function as many times as we need to acheive the end result. So when we setState(update the state) the application gets re-rendered
  componentDidUpdate() {
    //  added setTimeout to wait a little bit of time so the transition can be seen
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          {/* whenever the fade gets revealed it will run the percentage function */}
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before JUNE 14th</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                sunt id maxime voluptas, accusantium quos odit est quidem libero
                ipsa mollitia soluta quis dolorum explicabo doloremque illum a
                esse iure.
              </p>

              <div>button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
