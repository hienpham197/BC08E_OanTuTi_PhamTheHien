import React, { Component, Fragment } from "react";
import PreviewComponent from "./PreviewComponent";

export default class VariationComponent extends Component {
  glassesList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    glass: undefined,
  };

  handleVariationChange = async (id) => {
    let { selectedGlasses } = this.glassesList.find((glasses, index) => {
      if (glasses.id == id) {
        return true;
      }
    });

    for (let i = 0; i < this.glassesList.length; i++) {
      let glasses = this.glassesList[i];
      if (glasses.id == id) {
        selectedGlasses = glasses;
      }
    }
    await this.setState({
      glass: selectedGlasses,
    });
  };

  renderVariationSelection = () => {
    return this.glassesList.map((glass, index) => {
      return (
        <div className="col-2">
          <button
            className="glass-variation"
            data-id={glass.id}
            onClick={() => this.handleVariationChange(glass.id)}
          >
            <img className="w-100" src={glass.url} />
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <PreviewComponent selectedGlasses={this.state.glass} />
        <div className="row p-5 mt-2">{this.renderVariationSelection()}</div>
      </div>
    );
  }
}
