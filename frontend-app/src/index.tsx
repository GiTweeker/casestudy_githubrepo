import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './App.css';
import IInitialState from "./state/InitialState";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import AppHome from "./container/AppHome";

const store = configureStore({} as IInitialState);

ReactDOM.render(

    <Provider store={store}>
        <BrowserRouter>
            <AppHome/>
        </BrowserRouter>

    </Provider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
