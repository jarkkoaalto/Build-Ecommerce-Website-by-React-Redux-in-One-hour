import { combineReducers } from "../../../../../../../../AppData/Local/Microsoft/TypeScript/3.4.3/node_modules/redux";
import productReducer from "./productReducer";

export default combineReducers({
    products: productReducer
})