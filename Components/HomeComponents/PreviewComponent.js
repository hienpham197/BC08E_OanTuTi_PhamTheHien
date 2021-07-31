import React, { Component, Fragment } from "react";

export default class PreviewComponent extends Component {
  renderGlassesPreview = (selectedGlasses) => {
    if (selectedGlasses == undefined) {
      return (
        <Fragment>
          <div className="col-4 preview-panel">
            <img src="./glassesImage/model.jpg" />
          </div>
          <div className="col-4">
            <img src="./glassesImage/model.jpg" className="w-100" />
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <div className="col-4 preview-panel">
            <img className="w-100" src="./glassesImage/model.jpg" />
            <img
              className="selected-variation"
              src={`./glassesImage/v${selectedGlasses.id}.png`}
            />
            <div className="selected-info">
              <p className="name">{selectedGlasses.name}</p>
              <p className="desc text-white">{selectedGlasses.desc}</p>
            </div>
          </div>
          <div className="col-4">
            <img className="w-100" src="./glassesImage/model.jpg" />
          </div>
        </Fragment>
      );
    }
  };

  render() {
    return (
      <div className="row justify-content-center">
        {this.renderGlassesPreview(this.props.selectedGlasses)}
      </div>
    );
  }
}
