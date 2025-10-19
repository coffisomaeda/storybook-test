import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

/**
 * ToDoアイテムコンポーネント
 */
export const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
        />
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
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
