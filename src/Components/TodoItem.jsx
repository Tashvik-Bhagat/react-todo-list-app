import React, { useState } from 'react';
import { useTodo } from '../Context/todoContext';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex border border-gray-600 rounded-lg px-4 py-3 gap-x-4 shadow-md duration-300 ${
        todo.completed ? 'bg-green-700 text-gray-300' : 'bg-gray-700 text-gray-100'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`w-full bg-transparent outline-none rounded-lg ${
          isTodoEditable ? 'border border-blue-500 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="px-3 py-1 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? 'Save' : 'Edit'}
      </button>
      <button
        className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-500"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
