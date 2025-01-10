import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payLoad = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payLoad = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQantity(state, action) {
      //payLoad = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQantity(state, action) {
      //payLoad = pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
    },
    clearCart(state) {
      //payLoad = celarAll
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQantity,
  decreaseItemQantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

//total quantity
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

//total price
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
