import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    //these are the actions .
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => {
        return item._id === action.payload._id;
      });
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Product Added to the cart",
          showConfirmButton: false,
          timer: 1500,
        });
        // alert("");
      } else {
        Swal.fire({
          title: "Product already presented in Your cart",
          text: "You won't be able to add this again!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ok",
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((book) => {
        return book._id !== action.payload._id;
      });
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

//export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
