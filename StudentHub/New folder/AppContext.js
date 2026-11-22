
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [studentName, setStudentName] = useState('Elisha');
  const [darkMode, setDarkMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const updateName = (newName) => {
    setIsSaving(true);

    setTimeout(() => {
      setStudentName(newName);
      setIsSaving(false);
    }, 1000);
  };

  const toggleTheme = () => {
    setDarkMode(previous => !previous);
  };

  return (
    <AppContext.Provider
      value={{
        studentName,
        darkMode,
        isSaving,
        updateName,
        toggleTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
