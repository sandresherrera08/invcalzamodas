import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const editTask = (index) => {
        setEditIndex(index);
    };

    const updateTask = (updatedTask, index) => {
        const newTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
        setTasks(newTasks);
        setEditIndex(null); // Reset index after editing
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div className="app">
            <h1 className="title">Registro de Ventas</h1>
            <TaskForm addTask={addTask} editIndex={editIndex} updateTask={updateTask} tasks={tasks} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
