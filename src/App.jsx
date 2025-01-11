import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';
import { TodoProvider } from './Context/todoContext';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) =>
        eachTodo.id === id ? todo : eachTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) =>
      prevTodo.filter((eachTodo) => eachTodo.id !== id)
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-gray-900 min-h-screen py-8 px-4">
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-5 bg-gray-800 text-gray-100">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-8 mt-2 text-blue-400">
            Todo List
          </h1>
          <div className="mb-6">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-4">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full sm:w-1/2 lg:w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
  
}

export default App;
