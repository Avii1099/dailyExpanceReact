import React from 'react';
import { ExpenseSummary, NavBar, Footer } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#f48fb1',
      },
    },
  });

  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={darkTheme}>
        {' '}
        <NavBar />
        <ExpenseSummary />
        <Footer />
      </ThemeProvider>
    </Container>
  );
}

export default App;
