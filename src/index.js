import ReactDom from 'react-dom';
import React from 'react';
// import { Main } from './Component/Main';
import './Styles/stylesheet.css';
import { BrowserRouter } from "react-router-dom";
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './Redux/reducer'
import { Provider } from "react-redux";
import App from "./Component/App";
import thunk from 'redux-thunk';
import {database} from './Database/config'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));
ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));