//resetAction
import {useSelector,useDispatch} from 'react-redux'
import {incrimentAction,deccrimentAction,resetAction} from '/data/data/com.termux/files/home/redux-all-class/redux-react-app/src/servises/action/counterAction.js';
const Counter=()=>{
  const count=useSelector(state => state.count )
  const dispatch=useDispatch()
  const handleIncriment=()=>{
    dispatch(incrimentAction())
  }
  const handleDecriment=()=>{
    dispatch(deccrimentAction())
  }
  const handleReset=()=>{
    dispatch(resetAction())
  }
  return <div style={{textAlign:"center"}}>
  <h1>wellcome Counter</h1>
  <h2>Count:{count}</h2>
  <button onClick={handleIncriment}>+</button>
    <button onClick={handleDecriment}>-</button>
    <button onClick={handleReset}>reset</button>
  </div>
}
export default Counter;
//step1:state count:0
//step2:action
//step3:incriment, decrement,reset
//step4:reducer
//step5:store
//step6: Provider
//step7: use store

