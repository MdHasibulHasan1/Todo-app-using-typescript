import React, { useState } from 'react';

interface AddTodoFormProps {
  onAddTodo: (text: string, dueDate: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && dueDate.trim()) {
      onAddTodo(text, dueDate);
      setText('');
      setDueDate('');
    }
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="flex items-center">
        <input
          type="text"
          className="flex-1 mr-2 p-2 border"
          placeholder="Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="date"
          className="p-2 border"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-500 text-white" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
