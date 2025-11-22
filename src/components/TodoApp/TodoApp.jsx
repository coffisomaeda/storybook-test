import React, { useState } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

/**
 * ToDoアプリのメインコンポーネント
 */
export const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Reactを学ぶ', completed: true },
    { id: 2, text: 'Storybookを使う', completed: false },
  ]);
  const [nextId, setNextId] = useState(3);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: nextId,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-5 flex justify-center items-start">
      <div className="w-full max-w-2xl bg-gray-100 rounded-2xl p-8 mt-10 shadow-2xl">
        <header className="mb-6">
          <h1 className="text-3xl text-gray-800 mb-3 text-center">📝 ToDoアプリ</h1>
          <div className="text-center p-2 bg-white rounded-lg shadow-sm">
            <span className="text-base text-gray-600 font-medium">
              完了: {completedCount} / {totalCount}
            </span>
          </div>
        </header>
        <TodoInput onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;

