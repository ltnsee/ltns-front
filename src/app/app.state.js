import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

// 全局Store
const appStore = createStore(
    appReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// Action 
const actionFun = (value) => dispatch => {
    dispatch({
        type: ACTION_TYPE,
        value
    });
}

// Reducer
const reducerFun = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE:
            return {
                ...state,
                items: action.value
            }
        default:
            return state;
    }
}

// 拆分reducer
const appReducer = combineReducers({
    reducerFun
})


const ACTION_TYPE = 'ACTION_TYPE';

export default {
    appStore,
    actionFun,
    reducerFun,
    appReducer
}