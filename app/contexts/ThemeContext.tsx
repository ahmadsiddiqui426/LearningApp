//app\contexts\ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextProps {
  children: ReactNode; // Type for children prop
}

export const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: isDarkMode
      ? { background: '#333', text: '#fff', cardBackground: '#555' }
      : { background: '#ffffff', text: '#333', cardBackground: '#fff' },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
