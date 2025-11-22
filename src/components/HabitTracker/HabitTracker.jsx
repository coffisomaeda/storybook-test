import React, { useState } from 'react';
import { HabitInput } from './HabitInput';
import { HabitList } from './HabitList';

/**
 * 習慣トラッカーのメインコンポーネント
 */
export const HabitTracker = ({ initialHabits = [] }) => {
  const [habits, setHabits] = useState(initialHabits);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const addHabit = (habitName) => {
    setHabits([
      ...habits,
      {
        id: Date.now(),
        name: habitName,
        completedDays: [],
      },
    ]);
  };

  const toggleDay = (habitId, day) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id === habitId) {
          const isCompleted = habit.completedDays.includes(day);
          return {
            ...habit,
            completedDays: isCompleted
              ? habit.completedDays.filter((d) => d !== day)
              : [...habit.completedDays, day],
          };
        }
        return habit;
      })
    );
  };

  return (
    <div className="font-sans max-w-2xl mx-auto p-8 bg-gray-50 rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-gray-800 text-3xl m-0">Weekly Habits</h2>
      </div>

      <HabitInput onAdd={addHabit} />
      <HabitList habits={habits} days={days} onToggleDay={toggleDay} />
    </div>
  );
};
