import React from 'react';

interface TaskInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ value, setValue, addTask }) => (
  <div>
    <input
      id="input"
      placeholder="What needs to be done?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <button onClick={addTask}>Add Task</button>
  </div>
);

export default TaskInput;
