import axios from 'axios';
 export const getAlltodos=()=>async (dispatch)=>{
   dispatch({type:'GET_TODOS_REQUEST'})
   try{
     const res= await axios.get("https://jsonplaceholder.typicode.com/todos")
    dispatch({type:'GET_TODOS_SUCCESS',payload:res.data}) 
   }catch(error){
     dispatch({type:'GET_TODOS_FAILED',payload:error.message}) 
   }
 }
 