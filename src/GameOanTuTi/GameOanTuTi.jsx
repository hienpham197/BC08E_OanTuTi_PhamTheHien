import React, { Component } from "react";
import Player from "./Player";
import Bot from "./Bot";
import "./GameOanTuTi.css";
import KetQuaTroChoi from "./KetQuaTroChoi";
import { connect } from "react-redux";
class GameOanTuTi extends Component {
  render() {
    return (
      <div className="container-fluid gameOanTuTi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <KetQuaTroChoi />
            <button
              className="btn btn-success p-2 display-4 mt-5"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Bot />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      //Khai báo hàm để lặp lại hành động
      let randomItemCuoc = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 30) {
          //Dừng hàm setInterval

          clearInterval(randomItemCuoc);

          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(GameOanTuTi);
