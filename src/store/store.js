import { configureStore } from "@reduxjs/toolkit";
import productSilce from "./slices/productSilce";
import cartSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        products: productSilce,
        cart: cartSlice,
        user: userSlice
    },
})