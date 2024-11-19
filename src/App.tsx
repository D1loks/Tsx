import React, { useState, useEffect } from 'react';
import './App.css';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import TotalTime from './components/TotalTime';

interface Task {
  text: string;
  status: string;
  timeSpent: number;
  timerRunning: boolean;
}

const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [totalTime, setTotalTime] = useState(0);

  const addTask = () => {
    if (value.trim()) {
      const newTask = { text: value, status: 'Active', timeSpent: 0, timerRunning: false };
      setTasks([...tasks, newTask]);
      setValue('');
    }
  };

  const startTimer = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].status = 'Working on';
    newTasks[index].timerRunning = true;
    setTasks(newTasks);
  };

  const stopTimer = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].status = 'Active';
    newTasks[index].timerRunning = false;
    setTasks(newTasks);
  };

  const finishTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].status = 'Completed';
    newTasks[index].timerRunning = false;
    setTasks(newTasks);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let timeToAdd = 0;
      const updatedTasks = tasks.map((task) => {
        if (task.timerRunning) {
          task.timeSpent += 1;
          timeToAdd += 1;
        }
        return task;
      });

      setTotalTime((prevTotalTime) => prevTotalTime + timeToAdd);
      setTasks(updatedTasks);
    }, 1000);

    return () => clearInterval(interval);
  }, [tasks]);

  return (
    <div>
      <h1>ToDoList</h1>
      <TaskInput value={value} setValue={setValue} addTask={addTask} />
      <TotalTime totalTime={totalTime} />
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            startTimer={startTimer}
            stopTimer={stopTimer}
            finishTask={finishTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
