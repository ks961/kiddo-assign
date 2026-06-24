import React from 'react';
import { HomepagePayload } from './src/types';
import { ThemeProvider } from './src/context/ThemeContext';
import homepageData from './src/data/homepage.json';
import { Homepage } from './src/pages/HomePage';



export default function App() {
  const payload = homepageData as unknown as HomepagePayload;

  return (
    <ThemeProvider theme={payload.theme}>
      <Homepage />
    </ThemeProvider>
  );
}