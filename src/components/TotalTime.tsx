import React from 'react';

interface TotalTimeProps {
  totalTime: number;
}

const TotalTime: React.FC<TotalTimeProps> = ({ totalTime }) => (
  <div>Total time spent on tasks: {totalTime} seconds</div>
);

export default TotalTime;
