// import { createSlice } from "@reduxjs/toolkit";

// const sliceTodo = createSlice({
//   name: "todos",
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       state.push(action.payload);
//     },
//     removeTodo: (state, action) => {
//       return state.filter((todo) => todo.id !== action.payload);
//     },
//     doTodo: (state, action) => {
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
//       );
//     },

//   },
// });

// export const { addTodo, removeTodo, doTodo } = sliceTodo.actions;

// export default sliceTodo.reducer;
export const addTodo = "ADD_TODO";
export const removeTodo = "REMOVE_TODO";
export const doTodo = "DO_TODO"; // Updated action name

export function reducer(state = [], action) {
  switch (action.type) {
    case addTodo: {
      return [...state,action.payload  
      ];
    }
    case removeTodo: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case doTodo: {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    }
    default:
      return state;
  }
}

export const AddTodoAction=(title)=>{
  return{
    type:addTodo,
    payload:{id: crypto.randomUUID(), title, isCompleted: false  }
    
  }
}

export const RemoveTodoAction=(id)=>{
  return{
    type:removeTodo,
    payload:id
  }
}

export const DoTodoAction=(id)=>{
  return{
    type:doTodo,
    payload:id
  }
}
 
