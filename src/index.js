import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    applyMiddleware,
    createStore,
    combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware  from 'redux-thunk';
import 'tachyons'

import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {
    getRobotsReducer,
    searchRobotsReducer
} from './reducers';


const rootReducer = combineReducers({
    getRobots: getRobotsReducer,
    searchRobots: searchRobotsReducer
})
const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        logger
    ),
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
