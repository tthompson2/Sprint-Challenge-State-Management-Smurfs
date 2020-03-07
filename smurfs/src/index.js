import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import SmurfReducer from "./reducer/SmurfReducer";

import { createStore } from 'redux';
import { Provider } from "react-redux";

const store = createStore(SmurfReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));
