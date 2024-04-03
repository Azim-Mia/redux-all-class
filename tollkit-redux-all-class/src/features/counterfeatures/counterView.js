import {useSelector, useDispatch} from 'react-redux'
 import {incriment,decriment,reset} from '/data/data/com.termux/files/home/redux-all-class/tollkit-redux-all-class/src/features/counterfeatures/counterSlice.js'
const Counterview =()=>{
  const count=useSelector((state) =>state.counter.count)
  const dispatch=useDispatch()
  return (
  <div>    
  <h1>Count:{count}</h1>
  <button onClick={()=>dispatch(incriment())}>Incriment</button>
   <button onClick={()=>dispatch(decriment())}>Decriment</button>
    <button onClick={()=>dispatch(reset())}>Reset</button>
     </div>
    )
}
export default Counterview;