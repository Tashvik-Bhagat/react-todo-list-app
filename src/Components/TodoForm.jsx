import React, { useState } from 'react';
import { useTodo } from '../Context/todoContext';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write your task..."
        className="w-full border border-gray-600 rounded-l-lg px-3 py-2 bg-gray-700 text-gray-200 placeholder-gray-400 outline-none focus:outline-none focus:bg-gray-600"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-6 py-2 text-lg font-medium bg-blue-600 text-white hover:bg-blue-500 focus:outline-none active:bg-blue-400"
      >
        Add
      </button>
    </form>

  );
}

export default TodoForm;
