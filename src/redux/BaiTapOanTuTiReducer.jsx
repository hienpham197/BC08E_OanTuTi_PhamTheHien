const stateDefault = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/gameOanTuTi/keo.png",
      datCuoc: false,
    },

    {
      ma: "bao",
      hinhAnh: "./img/gameOanTuTi/bao.png",
      datCuoc: false,
    },

    {
      ma: "bua",
      hinhAnh: "./img/gameOanTuTi/bua.png",
      datCuoc: true,
    },
  ],
  ketQua: "I'm iron man, i love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  bot: {
    ma: "bua",
    hinhAnh: "./img/gameOanTuTi/bua.png",
  },
};

const BaiTapOanTuTiReducer = (state = stateDefault, aciton) => {
  switch (aciton.type) {
    case "CHON_KEO_BUA_BAO": {
      //Reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      //Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc do người dùng chọn hành động
      mangCuocUpdate = mangCuocUpdate.map((item) => {
        if (item.ma === aciton.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.bot = quanCuocNgauNhien;
      console.log("random", aciton);
      return { ...state };
    }

    case "END_GAME": {
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let bot = state.bot;

      switch (player.ma) {
        case "keo":
          if (bot.ma === "keo") {
            state.ketQua = "hoà nhau !!!";
          } else if (bot.ma === "bua") {
            state.ketQua = "thua sml !!!";
          } else {
            state.ketQua = "I'm iron man, i love you 3000 !!!";
            state.soBanThang += 1;
          }
          break;
        case "bua":
          if (bot.ma === "keo") {
            state.ketQua = "I'm iron man, i love you 3000 !!!";
            state.soBanThang += 1;
          } else if (bot.ma === "bua") {
            state.ketQua = "hoà nhau !!!";
          } else {
            state.ketQua = "thua sml !!!";
          }
          break;
        case "bao":
          if (bot.ma === "keo") {
            state.ketQua = "thua sml !!!";
          } else if (bot.ma === "bua") {
            state.ketQua = "I'm iron man, i love you 3000 !!!";
            state.soBanThang += 1;
          } else {
            state.ketQua = "hoà nhau !!!";
          }
          break;
        default:
          state.ketQua = "Chơi ăn gian thế !!!";
        // return { ...state };
      }
    }

    default:
      return { ...state };
  }
};
export default BaiTapOanTuTiReducer;
