import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import thunk from "redux-thunk";
import { productsReducer } from "../reducers/productsReducer";

// Local Storage

// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducersEnviar = combineReducers({
    products: productsReducer,
})

export const store = createStore(
    reducersEnviar,
)
