import React from 'react';
import { DefaultButton, ThemeProvider, initializeIcons } from '@fluentui/react';

function App() {
  initializeIcons();
  const value = 'World';
  return (
    <ThemeProvider>
      <DefaultButton onClick={() => alert('hello')}>Hello World</DefaultButton>
    </ThemeProvider>
  );
}

export default App;
