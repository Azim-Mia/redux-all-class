import counterSlice from '/data/data/com.termux/files/home/redux-all-class/tollkit-redux-all-class/src/features/counterfeatures/counterSlice.js'
import { configureStore} from '@reduxjs/toolkit'
const store=configureStore({
  reducer:{
    counter:counterSlice,
  }
});
export default store;