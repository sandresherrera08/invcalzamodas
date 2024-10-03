// ThemeContext.js
import React, { createContext } from 'react';

// Crear el contexto para el tema
const ThemeContext = createContext();

export const ThemeProvider = ({ value, children }) => (
  <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
);

export default ThemeContext;
