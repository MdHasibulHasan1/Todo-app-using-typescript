import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  dueDate: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const filteredTodos = filter === 'all' ? todos : filter === 'completed' ? todos.filter(todo => todo.completed) : todos.filter(todo => !todo.completed);

  return (
    <div className="mt-4">
      <div className="mb-4">
        <label htmlFor="filter" className="mr-2">Filter:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="remaining">Remaining</option>
        </select>
      </div>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          dueDate={todo.dueDate}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
