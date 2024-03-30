//state
//action- INCRIMENT, DECRIMENT
//reducer
const initialState={
  count:0
}
 const reducerCounter=(state=initialState,action)=>{
  switch(action.type){
    case 'INCRIMENT':
      return {
        ...state,
     count:state.count + 1,   
      }
   case 'DECRIMENT':
     return {
...state,
count:state.count -1,
     }
   case 'RESET':
     return {
      ...state, 
      count:0,
     }
    default:
    return state
  }
}
export default reducerCounter