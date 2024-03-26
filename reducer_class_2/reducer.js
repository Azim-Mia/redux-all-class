const INCRIMENT="INCRIMENT";
const DECRIMENT="DECRIMENT";
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
  }
  default:
  state;
}

//state
//dispatch action
// reducer
//store