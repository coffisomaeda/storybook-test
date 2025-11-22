import React from 'react';
import PropTypes from 'prop-types';

/**
 * ToDoアイテムコンポーネント
 */
export const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 border border-gray-300 rounded-lg mb-2 bg-white transition-all hover:shadow-md">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 cursor-pointer"
        />
        <span className={`text-base break-words ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="bg-red-500 text-white border-none rounded px-3 py-1.5 cursor-pointer text-base transition-all hover:bg-red-700 active:scale-95"
        aria-label="削除"
      >
        ✕
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
