import React from 'react';
import PropTypes from 'prop-types';

/**
 * 習慣アイテムコンポーネント
 */
export const HabitItem = ({ habit, days, onToggleDay }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-700 text-lg">{habit.name}</span>
                <span className="text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    {habit.completedDays.length} / 7 days
                </span>
            </div>
            <div className="flex justify-between gap-1.5">
                {days.map((day) => (
                    <div
                        key={day}
                        className="flex flex-col items-center gap-1.5 cursor-pointer"
                        onClick={() => onToggleDay(habit.id, day)}
                    >
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all text-white ${habit.completedDays.includes(day)
                            ? 'bg-purple-600 border-purple-600 scale-110'
                            : 'border-gray-300 hover:border-purple-300'
                            }`}>
                            {habit.completedDays.includes(day) && (
                                <span className="text-sm">✓</span>
                            )}
                        </div>
                        <span className="text-xs text-gray-400 font-medium">{day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

HabitItem.propTypes = {
    habit: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        completedDays: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    onToggleDay: PropTypes.func.isRequired,
};
