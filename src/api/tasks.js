import axios from 'axios';

const URL = 'http://127.0.0.1:8000';
const endPoint = `${URL}/api/tasks`;

export const fetchTasks = async () => await axios.get(endPoint);
export const fetchTask = async (id) => await axios.get(`${endPoint}/${id}`);
export const createTask = async (newTask) => await axios.post(endPoint, newTask);
export const updateTask = async (id, task) => await axios.put(`${endPoint}/${id}`, task);
export const deleteTask = async (id) => await axios.delete(`${endPoint}/${id}`);