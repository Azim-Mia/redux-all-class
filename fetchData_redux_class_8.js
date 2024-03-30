//async action -api colling
//api url - https://jsonplaceholder.typicode.com/todos
//middleware -redux-thunk
//axios api
const {createStore,applyMiddleware}=require('redux');
const {thunk}=require('redux-thunk');
const axios =require('axios')
const ERROR="ERROR";
const GET_TODO_REQUEST="GET_TODO_REQUEST";
const GET_DATA_SUCCESS="GET_DATA_SUCCESS";
const API_URL="https://jsonplaceholder.typicode.com/todos";
//state
const initialState={
  todos:[],
  isLoading:false,
  error:null,
}
//action -error, success,getData
const getTodosRequest=(success)=>{
  return {
    type:GET_TODO_REQUEST,
  }
}
const errorAction=(error)=>{
  return {
    type:ERROR,
    payload:error,
  }
}
const getTodosSuccess=(todos)=>{
  return {
    type:GET_DATA_SUCCESS,
    payload:todos,
  }
}
//reducer
const facedataReducer=(state=initialState,action)=>{
  switch(action.type){
    case 'GET_TODO_REQUEST':
      return {
        ...state,
        isLoading:true,
      };
      case 'ERROR':
      return {
        ...state,
        isLoading:false,
        error:action.payload,
      };
      case 'GET_DATA_SUCCESS':
      return {
        ...state,
        isLoading:false,
        todos:action.payload,
      }
  }
}
const fetchData=()=>{
  return (dispatch)=>{
    dispatch(getTodosRequest())
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res=>{
    console.log(res.data);
    })
    .catch(err=>{
    console.log(err.message)
    })
  }
}
//store
const store=createStore(facedataReducer,applyMiddleware(thunk))
store.subscribe(()=>{
  console.log(store.getState())
})
store.dispatch(fetchData());