import React from 'react';

// Componente de botón, memorizado para optimizar el rendimiento
const TaskButton = React.memo(({ handleClick }) => {
    return (
        <button className="action-button" onClick={handleClick}>Generar Informe</button> // Botón para generar informe
    );
});

export default TaskButton;
