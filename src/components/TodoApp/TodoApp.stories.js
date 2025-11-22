import React from 'react';
import { TodoApp } from './TodoApp';

const meta = {
  title: 'Components/TodoApp',
  component: TodoApp,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default = () => <TodoApp />;
