// App.js
import React, { useState, useMemo } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ThemeProvider } from './contexts/ThemeContext'; // Asegúrate de que la ruta sea correcta
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
        setEditIndex(null);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const generateCSV = () => {
        const headers = 'Cantidad,Talla,Producto,Referencia,Precio,Fecha';
        const csvContent = "data:text/csv;charset=utf-8," 
            + headers + "\n" // Añadir encabezados
            + tasks.map(e => `${e.cantidad},${e.talla},${e.producto},${e.referencia},${e.precio},${e.fecha}`).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "ventas.csv");
        document.body.appendChild(link); // Required for FF
        link.click();
    };

    const calculateTotal = () => {
        return tasks.reduce((total, task) => total + (parseFloat(task.precio) || 0), 0);
    };

    const total = useMemo(() => calculateTotal(), [tasks]);

    return (
        <div className="app">
            <h1 className="title">Registro de Ventas</h1>
            <TaskForm addTask={addTask} editIndex={editIndex} updateTask={updateTask} tasks={tasks} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} total={total} />
            <button className="action-button" onClick={generateCSV}>Generar Informe</button>
        </div>
    );
};

// Envolvemos la App en ThemeProvider para manejar el tema
const AppWithTheme = () => (
    <ThemeProvider>
        <App />
    </ThemeProvider>
);

export default AppWithTheme;
