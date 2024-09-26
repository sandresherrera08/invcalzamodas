import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask }) => {
    return (
        <div className="task-list">
            {/* Encabezados de la tabla */}
            <div className="task-item header">
                <div>Cantidad</div>
                <div>Talla</div>
                <div>Producto</div>
                <div>Referencia</div>
                <div>Valor</div>
                <div>Precio</div>
                <div>Fecha</div>
                <div>Acciones</div>
            </div>
            {tasks.map((task, index) => (
                <div key={index} className="task-item">
                    <div>{task.cantidad}</div>
                    <div>{task.talla}</div>
                    <div>{task.producto}</div>
                    <div>{task.referencia}</div>
                    <div>{task.valor}</div>
                    <div>{task.precio}</div>
                    <div>{task.fecha}</div>
                    <div>
                        <button className="action-button" onClick={() => editTask(index)}>Editar</button>
                        <button className="action-button" onClick={() => deleteTask(index)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
