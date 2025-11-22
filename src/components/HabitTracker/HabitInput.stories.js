import { HabitInput } from './HabitInput';

export default {
    title: 'HabitTracker/HabitInput',
    component: HabitInput,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        onAdd: (habit) => console.log('Added habit:', habit),
    },
};

export const CustomPlaceholder = {
    args: {
        onAdd: (habit) => console.log('Added habit:', habit),
        placeholder: '新しい習慣を入力...',
    },
};
