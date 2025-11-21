import { HabitTracker } from './HabitTracker';

export default {
    title: 'Components/HabitTracker',
    component: HabitTracker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export const Default = {
    args: {
        initialHabits: [],
    },
};

export const WithData = {
    args: {
        initialHabits: [
            {
                id: 1,
                name: 'Drink 2L Water',
                completedDays: ['Mon', 'Wed', 'Fri'],
            },
            {
                id: 2,
                name: 'Read 30 mins',
                completedDays: ['Tue', 'Thu'],
            },
            {
                id: 3,
                name: 'Morning Exercise',
                completedDays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
        ],
    },
};
