import React, { useState } from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import './TodoApp.css';

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
    <div className="todo-app">
      <div className="todo-container">
        <header className="todo-header">
          <h1 className="todo-title">📝 ToDoアプリ</h1>
          <div className="todo-stats">
            <span className="stats-text">
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
