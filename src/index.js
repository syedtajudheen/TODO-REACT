import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import $ from 'jquery';
import { createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index.js';
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(<Provider store={createStoreWithMiddleware(reducer)}>
                <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
