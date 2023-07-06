import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTask, createTask, updateTask, deleteTask } from '../api/tasks';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!params.id) {
      await createTask({ title, description });
      setTitle('');
      setDescription('');
    } 
    else {
      await updateTask(params.id, { title, description });
      setTitle('');
      setDescription('');
    }

    navigate('/');
  };

  useEffect(() => {
    if (params.id) {
      fetchTask(params.id).then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      }).catch((err) => { console.log(err) });
    }
  }, []);

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete the task?')) {
      await deleteTask(params.id);
      navigate('/');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh-10rem)]'>
      <div className='bg-zinc-950 px-10 py-4 rounded-xl'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-2xl font-bold my-4 text-center text-green-500'>{params.id ? 'UPDATE' : 'CREATE'}</h1>
          <input type="text" placeholder='title' className='block py-2 px-3 mb-4 w-full text-black rounded-xl' onChange={(e) => setTitle(e.target.value)} value={title} autoFocus />
          <textarea rows="3" placeholder='description' className='block py-2 px-3 mb-4 w-full text-black rounded-xl' onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
          <button className='w-full bg-sky-600 rounded-xl hover:bg-sky-400 font-bold py-2 hover:text-black'>{params.id ? 'UPDATE' : 'SAVE'}</button>
        </form>
        {
          params.id && (
            <button className='w-[200px] bg-red-700 mt-4 mb-4 font-bold hover:bg-red-500 hover:text-black rounded-xl py-2' onClick={handleDelete}>DELETE</button>
          )
        }
      </div>
    </div>
  )
}

export default TaskForm;