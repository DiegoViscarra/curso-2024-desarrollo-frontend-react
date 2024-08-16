import { SET_PRODUCTS } from "./filterableProductTableTypes";

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}