import { FETCH_PRODUCTS } from "./types";

export const fetxhProducts = () => (dispatch) => {
    fetch("http://localhost:8000/products").then(res => res.json())
    .then(data => {
        return dispatch({ type: FETCH_PRODUCTS, playload: data});
    });
}