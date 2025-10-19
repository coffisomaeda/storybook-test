import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoInput.css';

/**
 * ToDo入力コンポーネント
 */
export const TodoInput = ({ onAdd, placeholder = '新しいタスクを入力...' }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="todo-input"
      />
      <button type="submit" className="add-button">
        追加
      </button>
    </form>
  );
};

TodoInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
