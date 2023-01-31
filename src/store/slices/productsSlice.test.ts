import productsReducer, { receivedProducts } from "./productsSlice";

describe("products reducer", () => {
    it("should return the initial state when passed an empty action", () => {
        const initalState = undefined;
        const action = { type: "" };
        const result = productsReducer(initalState, action);
        expect(result).toEqual({ products: {} })
    });

})