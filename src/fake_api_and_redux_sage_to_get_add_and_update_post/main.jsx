import React from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.jsx';
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { HashRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('rootE2')).render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)