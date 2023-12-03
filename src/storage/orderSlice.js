import { createSlice } from "@reduxjs/toolkit";
import foodItems from "../data/foodItems.js";

const initialState = {
  orders: foodItems,
  orderTotal:0
};

const orderSlice = createSlice({
  name: "orderApp",
  initialState,
  reducers: {
    setQuantity:(state, action) => {
      const {id, qty} = action.payload;

      const index = state.orders.findIndex((item) => item.id === id);
      
      if (index !== -1) {
        state.orders[index].quantity = qty;
      }
      
    },
    handleStatus:(state, action)=>{
      const {id, status} = action.payload;
      const index = state.orders.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.orders[index].status = status;
      }
    },
    handlePrice: (state, action) => {
      const {id, price} = action.payload;
      const index = state.orders.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.orders[index].price = price;
      }
    },
    handleQty: (state, action) => {
      const {id, qty} = action.payload;
      const index = state.orders.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.orders[index].quantity = qty;
      }
    },
  }, 
});

export const {
  handlePrice,
  handleQty,
  setQuantity,
  handleStatus
} = orderSlice.actions;

export default orderSlice.reducer;
