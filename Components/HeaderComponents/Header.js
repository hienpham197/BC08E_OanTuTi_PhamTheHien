import React, { Component } from "react";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <div className="container-fluid">
          <div className="row">
            <h3 className="text-center text-white text-uppercase w-100">
              Try glasses app online
            </h3>
          </div>
        </div>
      </header>
    );
  }
}
