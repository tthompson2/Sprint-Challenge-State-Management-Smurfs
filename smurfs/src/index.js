import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from "redux-thunk";

import SmurfReducer from "./reducer/SmurfReducer";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";

const store = createStore(SmurfReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
