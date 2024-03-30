import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import todosReducer from '/data/data/com.termux/files/home/redux-all-class/redux-react-app/src/reduxFetchData_class_11/servises/reducer.js'
import {getAlltodos} from '/data/data/com.termux/files/home/redux-all-class/redux-react-app/src/reduxFetchData_class_11/servises/action.js';
const store =createStore(todosReducer, applyMiddleware(thunk));
store.dispatch(getAlltodos());

export default store
