import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Products } from "../../api/api"

export interface ProductsState {
    products: { [id: string]: Products }
}

const initialState: ProductsState = {
    products: {}
}

const productsSlice = createSlice({
    initialState,
    name: "products",
    reducers: {
        receivedProducts(state, action: PayloadAction<Products[]>) {
            const products = action.payload;
            products.forEach(product => {
                state.products[product.id] = product;
            })
        }
    }
})

export const { receivedProducts } = productsSlice.actions;
export default productsSlice.reducer;