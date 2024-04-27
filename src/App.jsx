import { ExpenseSummary, Header, Footer } from './components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';

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
    <Container maxWidth="sm" component="main">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />

        <ExpenseSummary />

        <Footer />
      </ThemeProvider>
    </Container>
  );
}

export default App;
