import { Theme } from '../types';
import React, { createContext, useContext } from 'react';

const defaultTheme: Theme = {
  primary: '#FF9933',
  background: '#FFF5E6',
  text: '#1A1A1A',
  card: '#FFFFFF',
  accent: '#FF6B6B',
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ theme, children }: { theme: Theme; children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => useContext(ThemeContext);