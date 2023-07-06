import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../api/tasks';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchTasks().then(res => setTasks(res.data)).catch(err => console.log(err));
  
    return () => {
      fetchTasks();
    }
  }, []);  

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  )
}

export default HomePage;