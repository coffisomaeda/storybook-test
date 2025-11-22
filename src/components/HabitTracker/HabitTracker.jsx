import React, { useState } from 'react';

export const HabitTracker = ({ initialHabits = [] }) => {
  const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState('');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([
        ...habits,
        {
          id: Date.now(),
          name: newHabit,
          completedDays: [],
        },
      ]);
      setNewHabit('');
    }
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

      <div className="flex gap-2.5 mb-8 bg-white p-2.5 rounded-xl shadow-sm">
        <input
          type="text"
          className="flex-1 border-none p-3 text-base outline-none rounded-lg bg-gray-100 transition-colors focus:bg-gray-200"
          placeholder="Add a new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addHabit()}
        />
        <button className="bg-purple-600 text-white border-none px-5 rounded-lg font-semibold cursor-pointer transition-all hover:bg-purple-700 active:scale-95" onClick={addHabit}>
          Add
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {habits.map((habit) => (
          <div key={habit.id} className="bg-white p-6 rounded-2xl shadow-sm transition-transform hover:-translate-y-0.5">
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
                  onClick={() => toggleDay(habit.id, day)}
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
        ))}
      </div>
    </div>
  );
};
