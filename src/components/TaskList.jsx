import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-1'>
      {
        tasks.map(task => (
          <TaskCard key={task._id} task={task} />
        ))
      }
    </div>
  )
}

export default TaskList;