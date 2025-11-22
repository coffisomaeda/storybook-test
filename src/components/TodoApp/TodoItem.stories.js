import React from 'react';
import { TodoItem } from './TodoItem';

export default {
  title: 'TodoApp/TodoItem',
  component: TodoItem,
  tags: ['autodocs'],
};

const Template = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: 1,
    text: 'サンプルタスク',
    completed: false,
  },
  onToggle: (id) => console.log('Toggle:', id),
  onDelete: (id) => console.log('Delete:', id),
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    id: 2,
    text: '完了したタスク',
    completed: true,
  },
  onToggle: (id) => console.log('Toggle:', id),
  onDelete: (id) => console.log('Delete:', id),
};

export const LongText = Template.bind({});
LongText.args = {
  todo: {
    id: 3,
    text: 'これは非常に長いテキストを持つタスクの例です。このように長いテキストでも適切に表示されることを確認します。',
    completed: false,
  },
  onToggle: (id) => console.log('Toggle:', id),
  onDelete: (id) => console.log('Delete:', id),
};
