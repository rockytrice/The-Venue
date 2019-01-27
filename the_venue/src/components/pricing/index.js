import React, { Component } from "react";
import MyButton from "../utils/Button";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    seats: ["Balcony", "Center", "Floor"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ultricies leo integer malesuada nunc. Diam volutpat commodo sed egestas. Posuere morbi leo urna molestie at elementum eu facilisis.",
      "Sed sed risus pretium quam vulputate dignissim suspendisse in. Fames ac turpis egestas sed."
    ],
    // not real links
    linkto: [
      "http://sales/balcony",
      "http://sales/center",
      "http://sales/floor"
    ],
    // adding delay in state for custom animation so that the middle card animates first then the other two.😎
    delay: [500, 0, 500]
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.seats[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase Tickets"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          {/* trigger function and get from state whatever values we want to render */}
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
