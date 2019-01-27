import React, { Component } from "react";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/index";
import VenueNfo from "./components/venueNfo/index";
import Highlight from "./components/Highlights/index";
import "./resources/styles.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px" }}>
        <Header />
        <Featured />
        <VenueNfo />
        <Highlight />
      </div>
    );
  }
}

export default App;
