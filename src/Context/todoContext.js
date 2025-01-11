import { useContext } from "react";
import { createContext } from "react";


export const todoContext = createContext({
  todos: [{
    id: 1,
    todo: "abc",
    completed: false
  }],

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
})

export const useTodo = () => {
  return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider