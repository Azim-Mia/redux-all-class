//resetAction
import {useSelector} from 'react-redux'
const FetchTodos=()=>{
 const {isLoading,todos,error}= useSelector(state =>state)
  return ( <section>
  {isLoading && <h1>Data is Loading..</h1>}
    {error && <h1>{error.message}</h1>}
  {todos && todos.map((todo)=>{
    return <article key={todo.id} style={{textAlign:"center"}}>
    <h1>{todo.id}</h1>
    <p>{todo.title}</p>
    </article>
  })}
  </section>
    )
}
export default FetchTodos;
//step1:state count:0
//step2:action
//step3:incriment, decrement,reset
//step4:reducer
//step5:store
//step6: Provider
//step7: use store

