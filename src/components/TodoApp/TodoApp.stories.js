import React from 'react';
import { TodoApp } from './TodoApp';

export default {
  title: 'TodoApp/TodoApp',
  component: TodoApp,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => <TodoApp />;
