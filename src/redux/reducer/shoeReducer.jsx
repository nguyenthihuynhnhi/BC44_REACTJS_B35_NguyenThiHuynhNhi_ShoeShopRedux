import { shoeArr } from "../../Shoe/data";
import { MUA, SO_LUONG, XEM_CHI_TIET, XOA } from "../constant/shoeConstant";

const initState = {
  shoeArr: shoeArr,
  detailShoe: shoeArr[0],
  cart: [],
};

export const shoeReducer = (state = initState, action) => {
  switch (action.type) {
    case XEM_CHI_TIET: {
      const shoe = action.payload;
      const copyState = JSON.parse(JSON.stringify(state));
      copyState.detailShoe = shoe;

      return { ...state, detailShoe: copyState.detailShoe };
    }

    case MUA: {
      const newShoe = action.payload;
      const copyState = JSON.parse(JSON.stringify(state));
      //Tìm shoe đang gửi lên có đang nằm trong cart hay không
      // dùng finIndex : Nếu có trong cart là !==  -1, nếu không có là === -1

      const index = copyState.cart.findIndex((item) => {
        if (newShoe.id === item.id) {
          return true;
        }
      });

      //neu co thi tang so luong
      if (index !== -1) {
        copyState.cart[index].soLuong += 1;
      }

      // neu khong co thi pussh vao cart
      if (index === -1) {
        newShoe.soLuong = 1;
        copyState.cart.push(newShoe);
      }

      return { ...state, cart: copyState.cart };
    }
    case XOA: {
      const delShoe = action.payload;

      const copyState = JSON.parse(JSON.stringify(state));

      copyState.cart = copyState.cart.filter((item) => item.id !== delShoe.id);
      return { ...state, cart: copyState.cart };
    }

    case SO_LUONG: {
      const { shoe, option } = action.payload;

      const copyState = JSON.parse(JSON.stringify(state));
      const index = copyState.cart.findIndex((item) => {
        if (shoe.id === item.id) {
          return true;
        }
      });

      copyState.cart[index].soLuong += option;

      if (copyState.cart[index].soLuong < 1) {
        copyState.cart = copyState.cart.filter((item) => item.id !== shoe.id);
      }
      return { ...state, cart: copyState.cart };
    }

    default:
      return state;
  }
};
