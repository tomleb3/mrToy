import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'


import { authReducer } from './reducers/authReducer';
import { modalReducer } from './reducers/modalReducer';
import { toyReducer } from './reducers/toyReducer';

const rootReducer = combineReducers({
    toyModule: toyReducer,
    authModule: authReducer,
    modalModule: modalReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));