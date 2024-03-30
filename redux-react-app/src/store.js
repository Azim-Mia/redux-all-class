import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import todosReducer from '/data/data/com.termux/files/home/redux-all-class/redux-react-app/src/servises/reducer/reducer.js'
import {getAlltodos} from '/data/data/com.termux/files/home/redux-all-class/redux-react-app/src/servises/action/counterAction.js';
const store =createStore(todosReducer, applyMiddleware(thunk));
store.dispatch(getAlltodos());

export default store
