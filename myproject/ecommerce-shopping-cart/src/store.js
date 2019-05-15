import {createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './produces';
const initialState = {};

export default createStore(rootReducer, initialState, applyMiddlewate(trunk));