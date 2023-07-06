import { useNavigate } from 'react-router-dom';
import { updateTask } from '../api/tasks';

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  const handleUpdate = async () => {
    await updateTask(task._id, { completed: !task.completed }).then((res) => {
      res.data.completed ? alert('Task completed.') : alert('Task activated.');
      window.location.reload();
    });
  };

  return (
    <div className='flex justify-between bg-zinc-950 p-4 hover:cursor-pointer hover:bg-slate-800 rounded-xl'>
      <div className='flex flex-col' onClick={() => navigate(`/task/${task._id}`)}>
        <h2 className='font-bold text-blue-500'>{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div className='flex justify-center text-xl'>
        <button onClick={handleUpdate}>{task.completed ? '✔️' : '👍'}</button>
      </div>
    </div>
  )
}

export default TaskCard;