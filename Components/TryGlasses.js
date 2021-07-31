import React, { Component } from "react";
import Header from "./HeaderComponents/Header";
import Home from "./HomeComponents/Home";
// import VariationComponent from "./HomeComponents/VariationComponent";

export default class TryGlasses extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <VariationComponent /> */}
        <Home />
      </div>
    );
  }
}
