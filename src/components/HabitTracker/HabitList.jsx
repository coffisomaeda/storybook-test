import React from 'react';
import PropTypes from 'prop-types';
import { HabitItem } from './HabitItem';

/**
 * 習慣リストコンポーネント
 */
export const HabitList = ({ habits, days, onToggleDay }) => {
    if (habits.length === 0) {
        return (
            <div className="text-center py-10 px-5 text-gray-400">
                <p className="text-xl mb-2 font-medium">習慣がありません</p>
                <p className="text-sm text-gray-300">上の入力欄から新しい習慣を追加してください</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4">
            {habits.map((habit) => (
                <HabitItem
                    key={habit.id}
                    habit={habit}
                    days={days}
                    onToggleDay={onToggleDay}
                />
            ))}
        </div>
    );
};

HabitList.propTypes = {
    habits: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            completedDays: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    onToggleDay: PropTypes.func.isRequired,
};
