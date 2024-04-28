import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import { Layout, appRoutes } from './Routes';

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
    typography: {
      fontFamily: ['Nunito', 'sans-serif'].join(','),
    },
  });

  return (
    <Container maxWidth="sm" component="main">
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="sm" component="main">
          <CssBaseline />
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                {appRoutes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Route>
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </Container>
  );
}

export default App;
