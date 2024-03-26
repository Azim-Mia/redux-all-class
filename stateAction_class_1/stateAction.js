//state
const initialCountSatate={
  count:0
}
const initialUserSatate={
  user:[{nane:"azim"}]
}
//action-Object =type,payload
//INCRIMENT COUNRER
const incrimentAction=()=>{
  return {
    type:'INCRIMENT',
  }
}
//DECRIMENT COUNRER
const decrimentAction=()=>{
  return {
    type:'DECRIMENT',
  }
}
const addUser=()=>{
  return {
    type:'ADD_USER',
    payload:{name:"shakil"},
  }
}
//state
//dispatch action
next class.......
// reducer
//store