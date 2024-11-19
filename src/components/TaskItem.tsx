import React from 'react';

interface TaskItemProps {
  task: {
    text: string;
    status: string;
    timeSpent: number;
    timerRunning: boolean;
  };
  index: number;
  startTimer: (index: number) => void;
  stopTimer: (index: number) => void;
  finishTask: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, startTimer, stopTimer, finishTask }) => (
  <li>
    {task.text} - {task.status} - {task.timeSpent} seconds
    <div>
      {task.status !== 'Completed' && (
        <>
          {!task.timerRunning && task.status === 'Active' && (
            <button onClick={() => startTimer(index)}>Start</button>
          )}
          {task.timerRunning && (
            <>
              <button onClick={() => stopTimer(index)}>Stop</button>
              <button onClick={() => finishTask(index)}>Finish</button>
            </>
          )}
        </>
      )}
    </div>
  </li>
);

export default TaskItem;
