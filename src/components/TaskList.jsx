import React from 'react';

const TaskList = ({ tasks, editTask, deleteTask, total }) => {
    return (
        <div className="task-list">
            {/* Encabezados de la tabla */}
            <div className="task-item header">
                <div>Cantidad</div>
                <div>Talla</div>
                <div>Producto</div>
                <div>Referencia</div>
                <div>Precio</div>
                <div>Fecha</div>
                <div>Editar</div>
                <div>Eliminar</div>
            </div>
            {tasks.map((task, index) => (
                <div key={index} className="task-item">
                    <div>{task.cantidad}</div>
                    <div>{task.talla}</div>
                    <div>{task.producto}</div>
                    <div>{task.referencia}</div>
                    <div>{task.precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</div>
                    <div>{task.fecha}</div>
                    <div>
                        <button className="action-button" onClick={() => editTask(index)}>Editar</button>
                    </div>
                    <div>
                        <button className="action-button" onClick={() => deleteTask(index)}>Eliminar</button>
                    </div>
                </div>
            ))}
            {/* Fila del total */}
            <div className="task-item total-row">
                <div colSpan={6} style={{ textAlign: 'right' }}>Total:</div>
                <div>{total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</div>
            </div>
        </div>
    );
};

export default TaskList;
