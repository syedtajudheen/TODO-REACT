
import { createStore, compose } from 'redux';
import reducers from '../reducers';

function configureStore() {
    const enhancer = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    const store = createStore(reducers, enhancer);
    return store;
}

export default configureStore();