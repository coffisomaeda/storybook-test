import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * 習慣入力コンポーネント
 */
export const HabitInput = ({ onAdd, placeholder = 'Add a new habit...' }) => {
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {
            onAdd(inputValue.trim());
            setInputValue('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div className="flex gap-2.5 mb-8 bg-white p-2.5 rounded-xl shadow-sm">
            <input
                type="text"
                className="flex-1 border-none p-3 text-base outline-none rounded-lg bg-gray-100 transition-colors focus:bg-gray-200"
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button
                className="bg-purple-600 text-white border-none px-5 rounded-lg font-semibold cursor-pointer transition-all hover:bg-purple-700 active:scale-95"
                onClick={handleAdd}
            >
                Add
            </button>
        </div>
    );
};

HabitInput.propTypes = {
    onAdd: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};
