import { createSlice } from "@reduxjs/toolkit"
import type { Products } from "."

export interface ProductsState {
    products: { [id: string]: Products }
}

const initialState: ProductsState = {
    products: {}
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default productsSlice.reducer;