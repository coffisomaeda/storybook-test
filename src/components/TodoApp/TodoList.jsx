import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

/**
 * ToDoリストコンポーネント
 */
export const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-10 px-5 text-gray-400">
        <p className="text-xl mb-2 font-medium">タスクがありません</p>
        <p className="text-sm text-gray-300">上の入力欄から新しいタスクを追加してください</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
