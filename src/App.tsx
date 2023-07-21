import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState(1);

  interface Todo {
    id: number;
    text: string;
    dueDate: string;
    completed: boolean;
  }

  const handleAddTodo = (text: string, dueDate: string) => {
    const newTodo: Todo = {
      id: nextId,
      text,
      dueDate,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNextId(nextId + 1);
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const getTotalTasks = () => todos.length;
  const getCompletedTasks = () => todos.filter((todo) => todo.completed).length;
  const getRemainingTasks = () => getTotalTasks() - getCompletedTasks();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
      <div className="mt-4 p-2 bg-gray-100">
        <p>Total tasks: {getTotalTasks()}</p>
        <p>Completed tasks: {getCompletedTasks()}</p>
        <p>Remaining tasks: {getRemainingTasks()}</p>
      </div>
    </div>
  );
};

export default App;
