import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Products/reducer";
import { authReducer } from "./Auth/reducer";
import { cartWishReducer } from "./CartWish/reducer";
import { ordersReducer } from "./Orders/reducer";
const rootReducer = combineReducers({
  productReducer,
  authReducer,
  cartWishReducer,
  ordersReducer,
});

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;
