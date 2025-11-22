import React from 'react';
import { TodoInput } from './TodoInput';

export default {
  title: 'TodoApp/TodoInput',
  component: TodoInput,
  tags: ['autodocs'],
};

const Template = (args) => <TodoInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onAdd: (text) => console.log('Add:', text),
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  onAdd: (text) => console.log('Add:', text),
  placeholder: 'やることを入力してください...',
};
