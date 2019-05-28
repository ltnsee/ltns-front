import { 
    createStore, 
    applyMiddleware, 
    compose, 
    combineReducers
 } from 'redux';
import thunk from 'redux-thunk';

import { menuReducer } from '../navigate/sidebar/menu.reducer';

const initialState = {};
const middleware = [thunk];

// 拆分reducer
export const appReducer = combineReducers({
    menuReducer
});

// 全局Store
export const appStore = createStore(
    appReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);