import { HabitItem } from './HabitItem';

export default {
    title: 'HabitTracker/HabitItem',
    component: HabitItem,
    tags: ['autodocs'],
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const NoDaysCompleted = {
    args: {
        habit: {
            id: 1,
            name: 'Morning Exercise',
            completedDays: [],
        },
        days: days,
        onToggleDay: (habitId, day) => console.log('Toggled:', habitId, day),
    },
};

export const SomeDaysCompleted = {
    args: {
        habit: {
            id: 2,
            name: 'Read for 30 minutes',
            completedDays: ['Mon', 'Wed', 'Fri'],
        },
        days: days,
        onToggleDay: (habitId, day) => console.log('Toggled:', habitId, day),
    },
};

export const AllDaysCompleted = {
    args: {
        habit: {
            id: 3,
            name: 'Drink 8 glasses of water',
            completedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        days: days,
        onToggleDay: (habitId, day) => console.log('Toggled:', habitId, day),
    },
};
