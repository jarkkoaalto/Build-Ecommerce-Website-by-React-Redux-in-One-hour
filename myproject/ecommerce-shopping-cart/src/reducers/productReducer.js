import { FETCH_PRODUCTS } from "../actions/types";
const initialStare = {items:[]};

export default function(state = initialStare, action){
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, items: action.payload};
        default:
            return state;
    }
}