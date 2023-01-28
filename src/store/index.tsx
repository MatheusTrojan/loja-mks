import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../components/ShopCartModal/cartSlice";
import productReducer from "../components/Product/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
});
