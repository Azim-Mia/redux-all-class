
//step1: install package
// npm install react-redux thunk axios
//step2: constans undefine-
//step3: async action creator
//step4: reducer
//step5: create store
//step6: Provide store
//step7:use store
//step8:additing css
import {getAlltodos} from '/data/data/com.termux/files/home/redux-all-class/redux-react-app/src/reduxFetchData_class_11/servises/action.js';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
const FetchTodos=()=>{
  const {isLoading,error,todos}=useSelector(state=>state)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAlltodos)
  })
  return (
<div>
<div>todo app</div>
{isLoading && <h1>Data is Loading..</h1>}
{error && <h1>{error}</h1>}
<section>
{todos && todos.map(todo=>{
return <article key={todo.id} style={{textAlign:"center"}}>
<h1>{todo.id}</h1>
<h1>{todo.title}</h1>
</article>
})}  
</section>
    </div>
  );
}

export default FetchTodos;