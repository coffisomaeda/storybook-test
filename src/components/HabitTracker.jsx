import React, { useState } from 'react';
import './HabitTracker.css';

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
    <div className="habit-tracker-container">
      <div className="habit-tracker-header">
        <h2>Weekly Habits</h2>
      </div>

      <div className="habit-input-group">
        <input
          type="text"
          className="habit-input"
          placeholder="Add a new habit..."
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addHabit()}
        />
        <button className="add-habit-btn" onClick={addHabit}>
          Add
        </button>
      </div>

      <div className="habit-list">
        {habits.map((habit) => (
          <div key={habit.id} className="habit-card">
            <div className="habit-info">
              <span className="habit-name">{habit.name}</span>
              <span className="habit-streak">
                {habit.completedDays.length} / 7 days
              </span>
            </div>
            <div className="week-progress">
              {days.map((day) => (
                <div
                  key={day}
                  className={`day-check ${
                    habit.completedDays.includes(day) ? 'completed' : ''
                  }`}
                  onClick={() => toggleDay(habit.id, day)}
                >
                  <div className="check-circle">
                    {habit.completedDays.includes(day) && (
                      <span className="check-icon">✓</span>
                    )}
                  </div>
                  <span className="day-label">{day}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
