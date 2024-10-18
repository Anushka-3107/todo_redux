import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
       todos : [],
    },

reducers:{
    ADD_TODO: (state,action) =>{
        state.todos.push({
            id:Date.now(),
            text:action.payload,
        })      
    },

    REMOVE_TODO:(state,action) => {
        state.todos = state.todos.filter(
            todo => todo.id !== action.payload
        )
    }
}
});

export const {ADD_TODO,REMOVE_TODO} = todoSlice.actions;

export default todoSlice.reducer;


