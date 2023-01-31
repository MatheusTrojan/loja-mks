import cartReducer, { CartState, addToCart, removeFromCart, updateQuantity, addItemQuantity, subItemQuantity } from "./cartSlice"

describe("cart reducer", () => {

    test("an empty action", () => {
        const initialState = undefined;
        const action = { type: "" };
        const state = cartReducer(initialState, action)

        expect(state).toEqual({ 
            items: {} 
        })
    });

    test("addToCart", () => {
        const initialState = undefined;
        const action = addToCart("abc");
        let state = cartReducer(initialState, action)

        expect(state).toEqual({ 
            items: { abc: 1 } 
        })
        state = cartReducer(state, action)
        state = cartReducer(state, action)

        expect(state).toEqual({ 
            items: { abc: 3 } 
        })
    });

    test("removeFromCart", () => {
        const initialState: CartState = { 
            items: { abc: 1, def: 3 } 
        };
        const action = removeFromCart("abc");
        const state = cartReducer(initialState, action)

        expect(state).toEqual({ 
            items: { def: 3 } 
        })
    });

    test("updateQuantity", () => {
        const initialState: CartState = { 
            items: { abc: 1, def: 3 } 
        };
        const action = updateQuantity({ id: "abc", quantity: 5 });
        const state = cartReducer(initialState, action)
        expect(state).toEqual({
            items: { abc: 5, def: 3 } 
        })
    });

    test("addItemQuantity", () => {
        const initialState: CartState = { 
            items: { abc: 1, def: 3 } 
        };
        const action = addItemQuantity("abc");
        const state = cartReducer(initialState, action)
        expect(state).toEqual({
            items: { abc: 2, def: 3 } 
        })
    });

    test("subItemQuantity", () => {
        const initialState: CartState = { 
            items: { abc: 5, def: 1 } 
        };
        let action = subItemQuantity("abc");
        let state = cartReducer(initialState, action)

        expect(state).toEqual({
            items: { abc: 4, def: 1 } 
        })

        action = subItemQuantity("def");
        state = cartReducer(state, action)

        expect(state).toEqual({
            items: { abc: 4, def: 1 } 
        })
    });
})