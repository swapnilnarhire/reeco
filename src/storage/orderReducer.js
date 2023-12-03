import { createSlice } from "@reduxjs/toolkit";
import { orderedProducts } from "../data/orderData";
import status from "../data/status";

const calculateTotalPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    products: [...orderedProducts],
    totalPrice: calculateTotalPrice(orderedProducts),
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.totalPrice = calculateTotalPrice(state.products);
    },
    updateProductStatus: (state, action) => {
      const { productId, status } = action.payload;

      const productIndex = state.products.findIndex((p) => p.id === productId);

      if (productIndex !== -1) {
        // Create a new array with the updated product
        state.products = [
          ...state.products.slice(0, productIndex),
          { ...state.products[productIndex], status: status },
          ...state.products.slice(productIndex + 1),
        ];
      }
    },
    approveAllProducts: (state) => {
      state.products.forEach((product) => {
        product.status = status.Approved;
      });
    },
    resetOrder: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProduct,
  updateProductStatus,
  approveAllProducts,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
