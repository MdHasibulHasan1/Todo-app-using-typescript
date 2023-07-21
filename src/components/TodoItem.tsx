import React from 'react';

interface TodoItemProps {
  text: string;
  dueDate: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, dueDate, completed, onToggle, onDelete }) => {
  return (
    <div className={`flex items-center justify-between p-2 border-b ${completed ? 'text-gray-500' : ''}`}>
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" checked={completed} onChange={onToggle} />
        <div>
          <p>{text}</p>
          <p className="text-xs text-gray-500">{dueDate}</p>
        </div>
      </div>
      <button className="text-xs text-red-500" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
