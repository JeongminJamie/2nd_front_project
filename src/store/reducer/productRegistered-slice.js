import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductRegisteredData = () => {
  return async (dispatch) => {
    const accessToken = localStorage.getItem("accessToken");

    //실제 등록된 판매 물품 조회 axios 요청 로직
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/sale/current`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("등록 물품 조회 응답 콘솔", response);
        if (response.status === 200) {
          console.log("등록 물품 조회 데이터 ", response.data);
          dispatch(
            productRegisteredActions.setProductRegisteredData(response.data)
          );
        }
      })
      .catch((error) => {
        console.error(error, "등록된 판매 상품 조회 요청 실패");
      });
  };
};

const productRegisteredSlice = createSlice({
  name: "productRegistered",
  initialState: {
    productRegisteredData: [],
  },
  reducers: {
    setProductRegisteredData(state, action) {
      state.productRegisteredData = action.payload;
    },
  },
});

export const productRegisteredActions = productRegisteredSlice.actions;

export default productRegisteredSlice;
