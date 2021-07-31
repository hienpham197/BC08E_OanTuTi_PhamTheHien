import React, { Component } from "react";
import { connect } from "react-redux";
import "./GameOanTuTi.css";

class Bot extends Component {
  render() {
    let { bot } = this.props;
    // let keyframe = `@keyframes randomItem${Date.now()} {
    //   0% {top: -50px;}
    //   25% {top: 25px;}
    //   50% {top: -50px;}
    //   75% {top: 25px;}
    //   100% {top: 0;}
    // }`;
    // animation: `randomItem${Date.now()} 0.5s`,
    //           position: "relative",
    return (
      <div className="playerGameOTT">
        {/* <style>{keyframe}</style> */}
        <div className="result">
          <img
            className="result--baoBot result--keoBot result--buaBot" //class rotate hinh
            style={{
              width: 100,
              height: 100,
            }}
            src={bot.hinhAnh}
            alt={bot.hinhAnh}
          />
          {/* <img
            className="result--keoBot"
            style={{ width: 100, height: 100 }}
            src="./img/gameOanTuTi/keo.png"
            alt="./img/gameOanTuTi/keo.png"
          /> */}
          {/* <img
            className="result--baoBot"
            style={{ width: 100, height: 100 }}
            src="./img/gameOanTuTi/bao.png"
            alt="./img/gameOanTuTi/bao.png"
          /> */}
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/gameOanTuTi/playerComputer.png"
          alt="./img/gameOanTuTi/playerComputer.png"
          style={{ width: 200, height: 200 }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bot: state.BaiTapOanTuTiReducer.bot,
  };
};
export default connect(mapStateToProps)(Bot);
