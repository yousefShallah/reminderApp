import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import Reminder from './reducers';
import { Provider } from 'react-redux';
import './index.css';


const store = createStore(Reminder);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

