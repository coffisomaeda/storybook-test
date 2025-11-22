import { HabitList } from './HabitList';

export default {
    title: 'HabitTracker/HabitList',
    component: HabitList,
    tags: ['autodocs'],
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const Empty = {
    args: {
        habits: [],
        days: days,
        onToggleDay: (habitId, day) => console.log('Toggled:', habitId, day),
    },
};

export const SingleHabit = {
    args: {
        habits: [
            {
                id: 1,
                name: 'Morning Exercise',
                completedDays: ['Mon', 'Wed', 'Fri'],
            },
        ],
        days: days,
        onToggleDay: (habitId, day) => console.log('Toggled:', habitId, day),
    },
};

export const MultipleHabits = {
    args: {
        habits: [
            {
                id: 1,
                name: 'Morning Exercise',
                completedDays: ['Mon', 'Wed', 'Fri'],
            },
            {
                id: 2,
                name: 'Read for 30 minutes',
                completedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            },
            {
                id: 3,
                name: 'Drink 8 glasses of water',
                completedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
        ],
        days: days,
        onToggleDay: (habitId, day) => console.log('Toggled:', habitId, day),
    },
};
