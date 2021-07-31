import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    let { ketQua, soBanThang, soBanChoi } = this.props;
    return (
      <div>
        <div className="display-4 text-warning">{ketQua}</div>
        <div className="display-4 text-success mt-3">
          Số bàn thắng: <span className="text-warning ">{soBanThang}</span>
        </div>
        <div className="display-4 text-success">
          Tổng số bàn chơi: <span className="text-warning">{soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOanTuTiReducer.ketQua,
    soBanThang: state.BaiTapOanTuTiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuTiReducer.soBanChoi,
  };
};
export default connect(mapStateToProps)(KetQuaTroChoi);
