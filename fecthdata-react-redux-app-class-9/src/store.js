import reducerCounter from '/data/data/com.termux/files/home/redux-all-class/fecthdata-react-redux-app-class-9/src/servises/reducer/reducer.js';
//import {incrimentAction,decrimentAction,resetAction} from '/data/data/com.termux/files/home/redux-all-class/redux-react-app/src/servises/action/counterAction.js';
import {createStore} from 'redux';
const store=createStore(reducerCounter);
export default store;