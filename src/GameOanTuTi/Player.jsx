import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    let { mangDatCuoc } = this.props;
    // console.log("props", mangDatCuoc);
    return (
      <div className="playerGameOTT">
        <div className="result">
          <img
            className="result--buaPlayer"
            style={{ width: 100, height: 100 }}
            src={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
            alt={mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}
          />
          {/* <img
            className="result--keo"
            style={{ width: 100, height: 100 }}
            src="./img/gameOanTuTi/keo.png"
            alt="./img/gameOanTuTi/keo.png"
          /> */}
          {/* <img
            className="result--bao"
            style={{ width: 100, height: 100 }}
            src="./img/gameOanTuTi/bao.png"
            alt="./img/gameOanTuTi/bao.png"
          /> */}
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/gameOanTuTi/player.png"
          alt="./img/gameOanTuTi/player.png"
          style={{ width: 200, height: 200 }}
        />
        <div className="row">
          {mangDatCuoc.map((item, index) => {
            //Xét giá trị thêm viền chi item được chọn
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid blue" };
            }

            return (
              <div className="col-4" key={index}>
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                >
                  <img
                    style={{ width: 50, height: 50 }}
                    src={item.hinhAnh}
                    alt={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuTiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
