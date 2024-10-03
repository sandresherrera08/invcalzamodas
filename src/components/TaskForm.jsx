import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editIndex, updateTask, tasks }) => {
    const [formData, setFormData] = useState({
        cantidad: '',
        talla: '',
        producto: '',
        referencia: '',
        precio: '',
        fecha: new Date().toLocaleDateString(),
    });

    useEffect(() => {
        if (editIndex !== null) {
            setFormData(tasks[editIndex]);
        } else {
            setFormData({ cantidad: '', talla: '', producto: '', referencia: '', precio: '', fecha: new Date().toLocaleDateString() });
        }
    }, [editIndex, tasks]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            updateTask(formData, editIndex);
        } else {
            addTask(formData);
        }
        setFormData({ cantidad: '', talla: '', producto: '', referencia: '', precio: '', fecha: new Date().toLocaleDateString() });
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input type="number" name="cantidad" placeholder="Cantidad" value={formData.cantidad} onChange={handleChange} required />
            <input type="text" name="talla" placeholder="Talla" value={formData.talla} onChange={handleChange} required />
            <input type="text" name="producto" placeholder="Producto" value={formData.producto} onChange={handleChange} required />
            <input type="text" name="referencia" placeholder="Referencia" value={formData.referencia} onChange={handleChange} required />
            <input type="number" name="precio" placeholder="Precio" value={formData.precio} onChange={handleChange} required />
            <button type="submit">{editIndex !== null ? 'Actualizar Venta' : 'Registrar Venta'}</button>
        </form>
    );
};

export default TaskForm;
