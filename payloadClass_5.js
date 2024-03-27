// first work INSTALL (npm i redux)
 //work concept ......
//state initialState 
//dispatch action, type-must be Object
// create reducer 
//create payload
//store -getState(), dispatch(), subscribe(),
const {createStore} =require("redux");
const INCRIMENT="INCRIMENT";
const DECRIMENT="DECRIMENT";
const INCRIMENT_BY_PAYLOAD='INCRIMENT_BY_PAYLOAD';
const RESET='RESET';
//state
//section one..
const initialCountSatate={
  user:["azim"],
  count:0
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
const payloadAction=(user)=>{
  return {
    type:INCRIMENT_BY_PAYLOAD,
    payload:user,
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
   case 'INCRIMENT_BY_PAYLOAD':
    return {
      user:[...state.user,action.payload],
      count:state.count + 1,
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
store.dispatch(payloadAction("karim"))