import React from 'react';
import { TodoList } from './TodoList';

export default {
  title: 'TodoApp/TodoList',
  component: TodoList,
  tags: ['autodocs'],
};

const Template = (args) => <TodoList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  todos: [],
  onToggle: (id) => console.log('Toggle:', id),
  onDelete: (id) => console.log('Delete:', id),
};

export const WithTodos = Template.bind({});
WithTodos.args = {
  todos: [
    { id: 1, text: '買い物に行く', completed: false },
    { id: 2, text: 'レポートを書く', completed: true },
    { id: 3, text: '友達に電話する', completed: false },
  ],
  onToggle: (id) => console.log('Toggle:', id),
  onDelete: (id) => console.log('Delete:', id),
};

export const ManyTodos = Template.bind({});
ManyTodos.args = {
  todos: [
    { id: 1, text: 'Reactを学ぶ', completed: true },
    { id: 2, text: 'Storybookを学ぶ', completed: true },
    { id: 3, text: 'ToDoアプリを作る', completed: false },
    { id: 4, text: 'コードをレビューする', completed: false },
    { id: 5, text: 'ドキュメントを書く', completed: false },
  ],
  onToggle: (id) => console.log('Toggle:', id),
  onDelete: (id) => console.log('Delete:', id),
};
