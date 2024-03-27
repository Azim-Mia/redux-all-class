
//require redux
const {createStore,combineReducers,applyMiddleware}=require('redux');
const GET_PRODUCTS='GET_PRODUCTS';
const ADD_PRODUCT='ADD_PRODUCT';
const GET_CARD='GET_CARD';
const ADD_CARD='ADD_CARD';
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
//  step -2
//card reducer
const initialCardState={
  cards:["card product", "knif"],
  numberofCard:2,
}
//create action type
const getCard=()=>{
  return {
    type:GET_CARD,
  }
};
const addCard=(value)=>{
  return {
    type:ADD_CARD,
    payload:value,
  }
};
//create reducer
const cardReducer=(state=initialCardState,action)=>{
  switch(action.type){
    case 'GET_CARD':
  return {
    ...state,
  };
  case 'ADD_CARD':
   return {
     cards:[...state.cards, action.payload],
    numberofCard:state.numberofCard +1,
   }
   default:
   return state
  }
}
const rootReducer=combineReducers({
  productR:productReducer,
  cardR:cardReducer,
})
//store - getState(),subscribe(), dispatch();
const store=createStore(rootReducer);
store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(addProduct('pen'));
store.dispatch(addCard('mango'));

