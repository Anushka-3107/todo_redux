// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { useState } from 'react'
// import { ADD_TODO, REMOVE_TODO } from '../features/todo/todoSlice';

// const Todo = () => {

//     const selector = useSelector((state)=>state.todo.todos);

//     const dispatch = useDispatch();

//     const [input, setInput] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if(input.trim()){
//             dispatch(ADD_TODO(input));
//             setInput('');
//         }
       
//     }

//     const handleRemove = (id) => {
//         dispatch(REMOVE_TODO(id));
//     }


//   return (
//     <div>
//         <h1>TODO</h1>

//         <form onSubmit={handleSubmit}>
//             <input
//              type="text" 
//              placeholder="Enter a task"
//              value={input}
//              onChange={(e)=> setInput(e.target.value)}
//             />

//             <button type= "submit">
//                 ADD
//             </button>
//         </form>

//         <div>
//             <ul>
//                 {selector.map((todo)=>{
//                     return(
//                         <li key={todo.id}>
//                        {todo.text}
//                         <button onClick={()=>handleRemove(todo.id)}>Remove</button>
//                         </li>
                      
//                     )
//                 })}
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Todo


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { ADD_TODO, REMOVE_TODO } from '../features/todo/todoSlice';

const Todo = () => {

    const selector = useSelector((state) => state.todo.todos);

    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim()) {
            dispatch(ADD_TODO(input));
            setInput('');
        }
    }

    const handleRemove = (id) => {
        dispatch(REMOVE_TODO(id));
    }

    const handleCheckboxChange = (id) => {
        dispatch(REMOVE_TODO(id));
    }

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-3xl font-bold mb-6">Todo List</h1>

            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-gray-300 rounded-md py-2 px-4 w-64 shadow-sm focus:outline-none focus:border-blue-500 transition"
                />

                <button
                    type="submit"
                    className="ml-3 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-200"
                >
                    Add
                </button>
            </form>

            <div className="w-full max-w-md">
                <ul className="space-y-2">
                    {selector.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-white border rounded-md py-2 px-4 shadow-sm"
                        >
                        <input  type='checkbox'
                            onChange={()=>handleCheckboxChange(todo.id)}
                        />
                            <span className="text-lg">{todo.text}</span>

                            <button
                                onClick={() => handleRemove(todo.id)}
                                className="bg-red-500 text-white py-1 px-3 rounded-md shadow hover:bg-red-600 transition duration-200"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
