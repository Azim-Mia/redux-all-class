import { createSlice } from '@reduxjs/toolkit';
export const counterSlice=createSlice({
  name:"counter",
  initialState:{
    count:0 
  },
  reducers:{
    incriment:(state)=>{
      state.count = state.count+1;
    },
    decriment:(state)=>{
      state.count = state.count-1;
    },
    reset:(state)=>{
      state.count = 0;
    },
  }
})
export const {incriment,decriment,reset}=counterSlice.actions;
// must be reducer single export 
export default counterSlice.reducer