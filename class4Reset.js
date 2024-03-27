// first work INSTALL (npm i redux)
 //work concept ......
//state initialState 
//dispatch action, type-must be Object
// create reducer 
//store -getState(), dispatch(), subscribe(),
const {createStore} =require("redux");
const INCRIMENT="INCRIMENT";
const DECRIMENT="DECRIMENT";
const RESET='RESET';
//state
//section one..
const initialCountSatate={
  count:0
}
const initialUserSatate={
  user:[{nane:"azim"}]
}
//action-Object =type,payload
//INCRIMENT COUNRER
//section 2 ...
const incrimentAction=()=>{
  return {
    type:INCRIMENT,
  }
}
//DECRIMENT COUNRER
const decrimentAction=()=>{
  return {
    type:DECRIMENT,
  }
}
// rest counter 
const restCounterAction=()=>{
  return {
    type:RESET,
  }
}
// reducer is pure function 
//section 3 ...
const counterReducer=(state=initialCountSatate,action)=>{
  switch(action.type){
    case 'INCRIMENT':
    return {
      ...state,
      count:state.count+1
    };
    case 'DECRIMENT':
    return {
      ...state,
      count:state.count-1
    }
    case 'RESET':
    return {
      ...state,
      count:0,
    }
  default:
  state;
}
}
const store=createStore(counterReducer);
store.subscribe(()=>{
  console.log(store.getState())
})
//dispatch action
store.dispatch(restCounterAction())