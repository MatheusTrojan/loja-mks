import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store";

type CheckoutState = "LOADING" | "READY" | "ERROR";
export interface CartState {
    items: { [productId: string]: number};
    checkoutState: CheckoutState;
}

const initialState: CartState = {
    items: {},
    checkoutState: "READY"
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<number>) {
            const id = action.payload;
            if (state.items[id]) {
                state.items[id]++;
            } else {
                state.items[id] = 1;
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            delete state.items[action.payload];
        },
        updateQuantity(state, action: PayloadAction<{ id: string, quantity: number }>) {
            const { id, quantity } = action.payload;
            state.items[id] = quantity
        }
    },
    extraReducers: function(builder) {
        builder.addCase("cart/checkout/pending", (state, action) => {
            state.checkoutState = "LOADING"
        })
    }
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

export function getNumItems(state: RootState) {
    let numItems = 0;
    for (let id in state.cart.items) {
        numItems += state.cart.items[id];
    }

    return numItems;
}

export const getMemoizedNumItems = createSelector(
    (state: RootState) => state.cart.items,
    (items) => {
        let numItems = 0;
        for (let id in items) {
            numItems += items[id]
        }
        return numItems;
    }
)

export const getTotalPrice = createSelector(
    (state: RootState) => state.cart.items,
    (state: RootState) => state.products.products,
    (items, products) => {
        let total = 0;
        for (let id in items) {
            total += products[id].price * items[id];
        }
        return Math.round(total)
    }
)