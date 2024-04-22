import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    cartItems: [],
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    addToCart: (state, action) => {
      const productId = action.payload._id;
      const productInCart = state.cartItems.find(
        (item) => item.product._id === productId
      );

      if (productInCart) {
        const updatedCart = state.cartItems.map((cartElement) => {
          return cartElement.product._id === productId
            ? { ...cartElement, quantity: cartElement.quantity + 1 }
            : { ...cartElement };
        });
        state.cartItems = updatedCart;
      } else {
        state.cartItems.push({ quantity: 1, product: action.payload });
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      const productInCart = state.cartItems.find(
        (item) => item.product._id === productId
      );
      if (productInCart.quantity > 1) {
        const updatedCart = state.cartItems.map((cartElement) => {
          return cartElement.product._id === productId
            ? { ...cartElement, quantity: cartElement.quantity - 1 }
            : { ...cartElement };
        });
        state.cartItems = updatedCart;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.product._id !== productId
        );
      }
    },

    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== action.payload
      );
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { clearCart, addToCart, removeFromCart, removeProductFromCart } =
  cartSlice.actions;
