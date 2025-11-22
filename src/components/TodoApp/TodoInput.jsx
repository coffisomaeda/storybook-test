import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-3 text-base border-2 border-gray-300 rounded-lg outline-none transition-colors focus:border-green-500"
      />
      <button type="submit" className="px-6 py-3 text-base bg-green-500 text-white border-none rounded-lg cursor-pointer transition-all font-bold hover:bg-green-600 active:scale-95">
        追加
      </button>
    </form>
  );
};

TodoInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
