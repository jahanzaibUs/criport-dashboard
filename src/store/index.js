import rootReducer from './reducer/combineReducer';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store=createStore(
        rootReducer,
        {},
        applyMiddleware(thunk)
    )


export default store;

store.subscribe(() =>{
    console.log('Store updated' , store.getState());
})