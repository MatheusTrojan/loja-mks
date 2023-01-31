import cartReducer, { 
    CartState,
    addToCart,
    removeFromCart, 
    updateQuantity, 
    addItemQuantity, 
    subItemQuantity, 
    getNumItems,
    getMemoizedNumItems,
    getTotalPrice
} from "./cartSlice"
import products from "../../../public/products.json"
import type { RootState } from "../../store";

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

describe("selectors", () => {

    describe("getNumItems", () => {

        it("should return 0 with no items", () => {
            const cart: CartState = {
                items: {}
            }
            const result = getNumItems({ cart } as RootState);
            expect(result).toEqual(0);
        })

        it("should add up the total", () => {
            const cart: CartState = {
                items: { abc: 3, def: 3, ghi: 6 }
            }
            const result = getNumItems({ cart } as RootState);
            expect(result).toEqual(12);
        })
    });

    describe('getMemoizedNumItems', () => {

        it("should return 0 with no items", () => {
            const cart: CartState = {
                items: {}
            }
            const result = getMemoizedNumItems({ cart } as RootState);
            expect(result).toEqual(0);
        })

        it("should add up the total", () => {
            const cart: CartState = {
                items: { abc: 3, def: 3, ghi: 6 }
            }
            const result = getMemoizedNumItems({ cart } as RootState);
            expect(result).toEqual(12);
        })

        it("should not compute again with the same state", () => {
            const cart: CartState = {
                items: { abc: 3, def: 3, ghi: 6 }
            };
            getMemoizedNumItems.resetRecomputations();

            getMemoizedNumItems({ cart } as RootState);
            expect(getMemoizedNumItems.recomputations()).toEqual(1);
            getMemoizedNumItems({ cart } as RootState);
            getMemoizedNumItems({ cart } as RootState);
            expect(getMemoizedNumItems.recomputations()).toEqual(1);
        })

        it("should recompute with new state", () => {
            const cart: CartState = {
                items: { abc: 3, def: 3, ghi: 6 }
            };
            getMemoizedNumItems.resetRecomputations();

            getMemoizedNumItems({ cart } as RootState);
            expect(getMemoizedNumItems.recomputations()).toEqual(1);

            cart.items = { abc: 2 }
            getMemoizedNumItems({ cart } as RootState);
            expect(getMemoizedNumItems.recomputations()).toEqual(2);
        })
    }),

    describe('getTotalPrice', () => {

        it("should return zero with an empty cart", () => {
            const state: RootState = {
                cart: { items: {} },
                products: {products: {}}
            }
            const result = getTotalPrice(state)
            expect(result).toEqual(0)
        });

        it("should add up the total", () => {
            const state: RootState = {
                cart: { items: {
                    [products[0].id]: 3,
                    [products[1].id]: 4
                } },
                products: {products: {
                    [products[0].id]: products[0],
                    [products[1].id]: products[1]
                }}
            }
            const result = getTotalPrice(state);
            expect(result).toEqual(19800);
        });

        it("should compute again with the same state", () => {
            const state: RootState = {
                cart: { items: {
                    [products[0].id]: 3,
                    [products[1].id]: 4
                } },
                products: {products: {
                    [products[0].id]: products[0],
                    [products[1].id]: products[1]
                }}
            }
            getTotalPrice.resetRecomputations();
            const result = getTotalPrice(state);
            expect(result).toEqual(19800);
            expect(getTotalPrice.recomputations()).toEqual(1);
            getTotalPrice(state);
            expect(getTotalPrice.recomputations()).toEqual(1);
        });

        it("should recompute with new products", () => {
            const state: RootState = {
                cart: { items: {
                    [products[0].id]: 3,
                    [products[1].id]: 4
                } },
                products: {products: {
                    [products[0].id]: products[0],
                    [products[1].id]: products[1]
                }}
            }
            getTotalPrice.resetRecomputations();
            let result = getTotalPrice(state);
            expect(result).toEqual(19800);
            expect(getTotalPrice.recomputations()).toEqual(1);
            state.products.products = {
                [products[0].id]: products[0],
                [products[1].id]: products[1],
                [products[2].id]: products[2]
            }
            result = getTotalPrice({ ...state });
            expect(result).toEqual(19800);
            expect(getTotalPrice.recomputations()).toEqual(2);
        });

        it("should recompute when cart changes", () => {
            const state: RootState = {
                cart: { items: {
                    [products[0].id]: 3,
                    [products[1].id]: 4
                } },
                products: {products: {
                    [products[0].id]: products[0],
                    [products[1].id]: products[1]
                }}
            }
            getTotalPrice.resetRecomputations();
            let result = getTotalPrice(state);
            expect(result).toEqual(19800);
            expect(getTotalPrice.recomputations()).toEqual(1);
            state.cart.items = {}
            result = getTotalPrice({ ...state });
            expect(result).toEqual(0);
            expect(getTotalPrice.recomputations()).toEqual(2);
        });
    })
})