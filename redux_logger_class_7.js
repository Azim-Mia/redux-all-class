
//require redux
const {createStore,applyMiddleware}=require('redux');
const {default:logger}=require('redux-logger');
const GET_PRODUCTS='GET_PRODUCTS';
const ADD_PRODUCT='ADD_PRODUCT';
//product reducer
//step-1
const initialProductState={
  products:["sugar", "salt"],
  nupberofProducts:2,
}
//create action type
const getProducts=()=>{
  return {
    type:GET_PRODUCTS,
  }
};
const addProduct=(value)=>{
  return {
    type:ADD_PRODUCT,
    payload:value,
  }
};
//create reducer
const productReducer=(state=initialProductState,action)=>{
  switch(action.type){
    case 'GET_PRODUCTS':
  return {
    ...state,
  };
  case 'ADD_PRODUCT':
   return {
     products:[...state.products, action.payload],
    nupberofProducts:state.nupberofProducts +1,
   }
   default:
   return state
  }
}
//store - getState(),subscribe(), dispatch();
const store=createStore(productReducer,applyMiddleware(logger));
store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(addProduct('pen'));

