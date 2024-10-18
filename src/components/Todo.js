import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import { ADD_TODO, REMOVE_TODO } from '../features/todo/todoSlice';

const Todo = () => {

    const selector = useSelector((state)=>state.todo.todos);

    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input.trim()){
            dispatch(ADD_TODO(input));
            setInput('');
        }
       
    }

    const handleRemove = (id) => {
        dispatch(REMOVE_TODO(id));
    }


  return (
    <div>
        <h1>TODO</h1>

        <form onSubmit={handleSubmit}>
            <input
             type="text" 
             placeholder="Enter a task"
             value={input}
             onChange={(e)=> setInput(e.target.value)}
            />

            <button type= "submit">
                ADD
            </button>
        </form>

        <div>
            <ul>
                {selector.map((todo)=>{
                    return(
                        <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=>handleRemove(todo.id)}>Remove</button>
                        </li>
                      
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Todo